!( function ( e, t ) {
    for ( var r in t ) e[ r ] = t[ r ];
} )(
    exports,
    ( function ( e ) {
        var t = {};
        function r( n ) {
            if ( t[ n ] ) return t[ n ].exports;
            var o = ( t[ n ] = {
                i: n,
                l: !1,
                exports: {}
            } );
            return e[ n ].call( o.exports, o, o.exports, r ), ( o.l = !0 ), o.exports;
        }
        return (
            ( r.m = e ),
            ( r.c = t ),
            ( r.d = function ( e, t, n ) {
                r.o( e, t ) || Object.defineProperty( e, t, {
                    enumerable: !0,
                    get: n
                } );
            } ),
            ( r.r = function ( e ) {
                'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty( e, Symbol.toStringTag, {
                    value: 'Module'
                } ),
                    Object.defineProperty( e, '__esModule', {
                        value: !0
                    } );
            } ),
            ( r.t = function ( e, t ) {
                if ( ( 1 & t && ( e = r( e ) ), 8 & t ) ) return e;
                if ( 4 & t && 'object' == typeof e && e && e.__esModule ) return e;
                var n = Object.create( null );
                if ( ( r.r( n ), Object.defineProperty( n, 'default', {
                    enumerable: !0,
                    value: e
                } ), 2 & t && 'string' != typeof e ) )
                    for ( var o in e )
                        r.d(
                            n,
                            o,
                            function ( t ) {
                                return e[ t ];
                            }.bind( null, o )
                        );
                return n;
            } ),
            ( r.n = function ( e ) {
                var t =
                    e && e.__esModule ?
                        function () {
                            return e.default;
                        } :
                        function () {
                            return e;
                        };
                return r.d( t, 'a', t ), t;
            } ),
            ( r.o = function ( e, t ) {
                return Object.prototype.hasOwnProperty.call( e, t );
            } ),
            ( r.p = '' ),
            r( ( r.s = 16 ) )
        );
    } )( [
        function ( e, _t, r ) {
            'use strict';
            var n = r( 3 ),
                o = Object.prototype.toString;
            function s( e ) {
                return '[object Array]' === o.call( e );
            }
            function i( e ) {
                return void 0 === e;
            }
            function a( e ) {
                return null !== e && 'object' == typeof e;
            }
            function u( e ) {
                return '[object Function]' === o.call( e );
            }
            function c( e, t ) {
                if ( null != e )
                    if ( ( 'object' != typeof e && ( e = [ e ] ), s( e ) ) )
                        for ( var r = 0, n = e.length; r < n; r++ ) t.call( null, e[ r ], r, e );
                    else
                        for ( var o in e ) Object.prototype.hasOwnProperty.call( e, o ) && t.call( null, e[ o ], o, e );
            }
            e.exports = {
                isArray: s,
                isArrayBuffer: function ( e ) {
                    return '[object ArrayBuffer]' === o.call( e );
                },
                isBuffer: function ( e ) {
                    return (
                        null !== e &&
                        !i( e ) &&
                        null !== e.constructor &&
                        !i( e.constructor ) &&
                        'function' == typeof e.constructor.isBuffer &&
                        e.constructor.isBuffer( e )
                    );
                },
                isFormData: function ( e ) {
                    return 'undefined' != typeof FormData && e instanceof FormData;
                },
                isArrayBufferView: function ( e ) {
                    return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView( e ) : e && e.buffer && e.buffer instanceof ArrayBuffer;
                },
                isString: function ( e ) {
                    return 'string' == typeof e;
                },
                isNumber: function ( e ) {
                    return 'number' == typeof e;
                },
                isObject: a,
                isUndefined: i,
                isDate: function ( e ) {
                    return '[object Date]' === o.call( e );
                },
                isFile: function ( e ) {
                    return '[object File]' === o.call( e );
                },
                isBlob: function ( e ) {
                    return '[object Blob]' === o.call( e );
                },
                isFunction: u,
                isStream: function ( e ) {
                    return a( e ) && u( e.pipe );
                },
                isURLSearchParams: function ( e ) {
                    return 'undefined' != typeof URLSearchParams && e instanceof URLSearchParams;
                },
                isStandardBrowserEnv: function () {
                    return (
                        ( 'undefined' == typeof navigator ||
                            ( 'ReactNative' !== navigator.product && 'NativeScript' !== navigator.product && 'NS' !== navigator.product ) ) &&
                        'undefined' != typeof window &&
                        'undefined' != typeof document
                    );
                },
                forEach: c,
                merge: function e() {
                    var t = {};
                    function r( r, n ) {
                        'object' == typeof t[ n ] && 'object' == typeof r ? ( t[ n ] = e( t[ n ], r ) ) : ( t[ n ] = r );
                    }
                    for ( var n = 0, o = arguments.length; n < o; n++ ) c( arguments[ n ], r );
                    return t;
                },
                deepMerge: function e() {
                    var t = {};
                    function r( r, n ) {
                        'object' == typeof t[ n ] && 'object' == typeof r ? ( t[ n ] = e( t[ n ], r ) ) : ( t[ n ] = 'object' == typeof r ? e( {}, r ) : r );
                    }
                    for ( var n = 0, o = arguments.length; n < o; n++ ) c( arguments[ n ], r );
                    return t;
                },
                extend: function ( e, t, r ) {
                    return (
                        c( t, function ( t, o ) {
                            e[ o ] = r && 'function' == typeof t ? n( t, r ) : t;
                        } ),
                        e
                    );
                },
                trim: function ( e ) {
                    return e.replace( /^\s*/, '' ).replace( /\s*$/, '' );
                }
            };
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 0 );
            function o( e ) {
                return encodeURIComponent( e )
                    .replace( /%40/gi, '@' )
                    .replace( /%3A/gi, ':' )
                    .replace( /%24/g, '$' )
                    .replace( /%2C/gi, ',' )
                    .replace( /%20/g, '+' )
                    .replace( /%5B/gi, '[' )
                    .replace( /%5D/gi, ']' );
            }
            e.exports = function ( e, t, r ) {
                if ( !t ) return e;
                var s;
                if ( r ) s = r( t );
                else if ( n.isURLSearchParams( t ) ) s = t.toString();
                else {
                    var i = [];
                    n.forEach( t, function ( e, t ) {
                        null != e &&
                            ( n.isArray( e ) ? ( t += '[]' ) : ( e = [ e ] ),
                                n.forEach( e, function ( e ) {
                                    n.isDate( e ) ? ( e = e.toISOString() ) : n.isObject( e ) && ( e = JSON.stringify( e ) ), i.push( o( t ) + '=' + o( e ) );
                                } ) );
                    } ),
                        ( s = i.join( '&' ) );
                }
                if ( s ) {
                    var a = e.indexOf( '#' ); -
                        1 !== a && ( e = e.slice( 0, a ) ), ( e += ( -1 === e.indexOf( '?' ) ? '?' : '&' ) + s );
                }
                return e;
            };
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 7 );
            e.exports = function ( e, t, r, o, s ) {
                var i = new Error( e );
                return n( i, t, r, o, s );
            };
        },
        function ( e, _t, _r ) {
            'use strict';
            e.exports = function ( e, t ) {
                return function () {
                    for ( var r = new Array( arguments.length ), n = 0; n < r.length; n++ ) r[ n ] = arguments[ n ];
                    return e.apply( t, r );
                };
            };
        },
        function ( e, _t, _r ) {
            'use strict';
            e.exports = function ( e ) {
                return !( !e || !e.__CANCEL__ );
            };
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 0 ),
                o = r( 23 ),
                s = {
                    'Content-Type': 'application/x-www-form-urlencoded'
                };
            function i( e, t ) {
                !n.isUndefined( e ) && n.isUndefined( e[ 'Content-Type' ] ) && ( e[ 'Content-Type' ] = t );
            }
            var a,
                u = {
                    adapter: ( 'undefined' != typeof XMLHttpRequest ?
                        ( a = r( 24 ) ) :
                        'undefined' != typeof process && '[object process]' === Object.prototype.toString.call( process ) && ( a = r( 31 ) ),
                        a ),
                    transformRequest: [
                        function ( e, t ) {
                            return (
                                o( t, 'Accept' ),
                                o( t, 'Content-Type' ),
                                n.isFormData( e ) || n.isArrayBuffer( e ) || n.isBuffer( e ) || n.isStream( e ) || n.isFile( e ) || n.isBlob( e ) ?
                                    e :
                                    n.isArrayBufferView( e ) ?
                                        e.buffer :
                                        n.isURLSearchParams( e ) ?
                                            ( i( t, 'application/x-www-form-urlencoded;charset=utf-8' ), e.toString() ) :
                                            n.isObject( e ) ?
                                                ( i( t, 'application/json;charset=utf-8' ), JSON.stringify( e ) ) :
                                                e
                            );
                        }
                    ],
                    transformResponse: [
                        function ( e ) {
                            if ( 'string' == typeof e )
                                try {
                                    e = JSON.parse( e );
                                } catch ( e ) { }
                            return e;
                        }
                    ],
                    timeout: 0,
                    xsrfCookieName: 'XSRF-TOKEN',
                    xsrfHeaderName: 'X-XSRF-TOKEN',
                    maxContentLength: -1,
                    validateStatus: function ( e ) {
                        return e >= 200 && e < 300;
                    }
                };
            ( u.headers = {
                common: {
                    Accept: 'application/json, text/plain, */*'
                }
            } ),
                n.forEach( [ 'delete', 'get', 'head' ], function ( e ) {
                    u.headers[ e ] = {};
                } ),
                n.forEach( [ 'post', 'put', 'patch' ], function ( e ) {
                    u.headers[ e ] = n.merge( s );
                } ),
                ( e.exports = u );
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 2 );
            e.exports = function ( e, t, r ) {
                var o = r.config.validateStatus;
                !o || o( r.status ) ? e( r ) : t( n( 'Request failed with status code ' + r.status, r.config, null, r.request, r ) );
            };
        },
        function ( e, _t, _r ) {
            'use strict';
            e.exports = function ( e, t, r, n, o ) {
                return (
                    ( e.config = t ),
                    r && ( e.code = r ),
                    ( e.request = n ),
                    ( e.response = o ),
                    ( e.isAxiosError = !0 ),
                    ( e.toJSON = function () {
                        return {
                            message: this.message,
                            name: this.name,
                            description: this.description,
                            number: this.number,
                            fileName: this.fileName,
                            lineNumber: this.lineNumber,
                            columnNumber: this.columnNumber,
                            stack: this.stack,
                            config: this.config,
                            code: this.code
                        };
                    } ),
                    e
                );
            };
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 25 ),
                o = r( 26 );
            e.exports = function ( e, t ) {
                return e && !n( t ) ? o( e, t ) : t;
            };
        },
        function ( e, _t ) {
            e.exports = require( 'http' );
        },
        function ( e, _t ) {
            e.exports = require( 'https' );
        },
        function ( e, _t, r ) {
            var n = r( 12 ),
                o = r( 9 ),
                s = r( 10 ),
                i = r( 32 ),
                a = r( 33 ).Writable,
                u = r( 34 )( 'follow-redirects' ),
                c = {
                    GET: !0,
                    HEAD: !0,
                    OPTIONS: !0,
                    TRACE: !0
                },
                f = Object.create( null );
            function p( e, t ) {
                a.call( this ),
                    ( e.headers = e.headers || {} ),
                    ( this._options = e ),
                    ( this._redirectCount = 0 ),
                    ( this._redirects = [] ),
                    ( this._requestBodyLength = 0 ),
                    ( this._requestBodyBuffers = [] ),
                    e.host && ( e.hostname || ( e.hostname = e.host ), delete e.host ),
                    t && this.on( 'response', t );
                var r = this;
                if (
                    ( ( this._onNativeResponse = function ( e ) {
                        r._processResponse( e );
                    } ),
                        !e.pathname && e.path )
                ) {
                    var n = e.path.indexOf( '?' );
                    n < 0 ? ( e.pathname = e.path ) : ( ( e.pathname = e.path.substring( 0, n ) ), ( e.search = e.path.substring( n ) ) );
                }
                this._performRequest();
            }
            function l( e ) {
                var t = {
                    maxRedirects: 21,
                    maxBodyLength: 10485760
                },
                    r = {};
                return (
                    Object.keys( e ).forEach( function ( o ) {
                        var s = o + ':',
                            a = ( r[ s ] = e[ o ] ),
                            c = ( t[ o ] = Object.create( a ) );
                        ( c.request = function ( e, o ) {
                            return (
                                'string' == typeof e ?
                                    ( ( e = n.parse( e ) ).maxRedirects = t.maxRedirects ) :
                                    ( e = Object.assign( {
                                        protocol: s,
                                        maxRedirects: t.maxRedirects,
                                        maxBodyLength: t.maxBodyLength
                                    },
                                        e
                                    ) ),
                                ( e.nativeProtocols = r ),
                                i.equal( e.protocol, s, 'protocol mismatch' ),
                                u( 'options', e ),
                                new p( e, o )
                            );
                        } ),
                            ( c.get = function ( e, t ) {
                                var r = c.request( e, t );
                                return r.end(), r;
                            } );
                    } ),
                    t
                );
            }
            [ 'abort', 'aborted', 'error', 'socket', 'timeout' ].forEach( function ( e ) {
                f[ e ] = function ( t ) {
                    this._redirectable.emit( e, t );
                };
            } ),
                ( p.prototype = Object.create( a.prototype ) ),
                ( p.prototype.write = function ( e, t, r ) {
                    if ( !( 'string' == typeof e || ( 'object' == typeof e && 'length' in e ) ) ) throw new Error( 'data should be a string, Buffer or Uint8Array' );
                    'function' == typeof t && ( ( r = t ), ( t = null ) ),
                        0 !== e.length ?
                            this._requestBodyLength + e.length <= this._options.maxBodyLength ?
                                ( ( this._requestBodyLength += e.length ),
                                    this._requestBodyBuffers.push( {
                                        data: e,
                                        encoding: t
                                    } ),
                                    this._currentRequest.write( e, t, r ) ) :
                                ( this.emit( 'error', new Error( 'Request body larger than maxBodyLength limit' ) ), this.abort() ) :
                            r && r();
                } ),
                ( p.prototype.end = function ( e, t, r ) {
                    'function' == typeof e ? ( ( r = e ), ( e = t = null ) ) : 'function' == typeof t && ( ( r = t ), ( t = null ) );
                    var n = this._currentRequest;
                    this.write( e || '', t, function () {
                        n.end( null, null, r );
                    } );
                } ),
                ( p.prototype.setHeader = function ( e, t ) {
                    ( this._options.headers[ e ] = t ), this._currentRequest.setHeader( e, t );
                } ),
                ( p.prototype.removeHeader = function ( e ) {
                    delete this._options.headers[ e ], this._currentRequest.removeHeader( e );
                } ),
                [ 'abort', 'flushHeaders', 'getHeader', 'setNoDelay', 'setSocketKeepAlive', 'setTimeout' ].forEach( function ( e ) {
                    p.prototype[ e ] = function ( t, r ) {
                        return this._currentRequest[ e ]( t, r );
                    };
                } ),
                [ 'aborted', 'connection', 'socket' ].forEach( function ( e ) {
                    Object.defineProperty( p.prototype, e, {
                        get: function () {
                            return this._currentRequest[ e ];
                        }
                    } );
                } ),
                ( p.prototype._performRequest = function () {
                    var e = this._options.protocol,
                        t = this._options.nativeProtocols[ e ];
                    if ( t ) {
                        if ( this._options.agents ) {
                            var r = e.substr( 0, e.length - 1 );
                            this._options.agent = this._options.agents[ r ];
                        }
                        var o = ( this._currentRequest = t.request( this._options, this._onNativeResponse ) );
                        for ( var s in ( ( this._currentUrl = n.format( this._options ) ), ( o._redirectable = this ), f ) ) s && o.on( s, f[ s ] );
                        if ( this._isRedirect ) {
                            var i = 0,
                                a = this._requestBodyBuffers;
                            !( function e() {
                                if ( i < a.length ) {
                                    var t = a[ i++ ];
                                    o.write( t.data, t.encoding, e );
                                } else o.end();
                            } )();
                        }
                    } else this.emit( 'error', new Error( 'Unsupported protocol ' + e ) );
                } ),
                ( p.prototype._processResponse = function ( e ) {
                    this._options.trackRedirects &&
                        this._redirects.push( {
                            url: this._currentUrl,
                            headers: e.headers,
                            statusCode: e.statusCode
                        } );
                    var t = e.headers.location;
                    if ( t && !1 !== this._options.followRedirects && e.statusCode >= 300 && e.statusCode < 400 ) {
                        if ( ++this._redirectCount > this._options.maxRedirects ) return void this.emit( 'error', new Error( 'Max redirects exceeded.' ) );
                        var r,
                            o = this._options.headers;
                        if ( 307 !== e.statusCode && !( this._options.method in c ) )
                            for ( r in ( ( this._options.method = 'GET' ), ( this._requestBodyBuffers = [] ), o ) ) /^content-/i.test( r ) && delete o[ r ];
                        if ( !this._isRedirect )
                            for ( r in o ) /^host$/i.test( r ) && delete o[ r ];
                        var s = n.resolve( this._currentUrl, t );
                        u( 'redirecting to', s ), Object.assign( this._options, n.parse( s ) ), ( this._isRedirect = !0 ), this._performRequest(), e.destroy();
                    } else ( e.responseUrl = this._currentUrl ), ( e.redirects = this._redirects ), this.emit( 'response', e ), ( this._requestBodyBuffers = [] );
                } ),
                ( e.exports = l( {
                    http: o,
                    https: s
                } ) ),
                ( e.exports.wrap = l );
        },
        function ( e, _t ) {
            e.exports = require( 'url' );
        },
        function ( e, t, r ) {
            function n( e ) {
                var r;
                function n() {
                    if ( n.enabled ) {
                        var e = n,
                            o = +new Date(),
                            s = o - ( r || o );
                        ( e.diff = s ), ( e.prev = r ), ( e.curr = o ), ( r = o );
                        for ( var i = new Array( arguments.length ), a = 0; a < i.length; a++ ) i[ a ] = arguments[ a ];
                        ( i[ 0 ] = t.coerce( i[ 0 ] ) ), 'string' != typeof i[ 0 ] && i.unshift( '%O' );
                        var u = 0;
                        ( i[ 0 ] = i[ 0 ].replace( /%([a-zA-Z%])/g, function ( r, n ) {
                            if ( '%%' === r ) return r;
                            u++;
                            var o = t.formatters[ n ];
                            if ( 'function' == typeof o ) {
                                var s = i[ u ];
                                ( r = o.call( e, s ) ), i.splice( u, 1 ), u--;
                            }
                            return r;
                        } ) ),
                            t.formatArgs.call( e, i );
                        var c = n.log || t.log || console.log.bind( console );
                        c.apply( e, i );
                    }
                }
                return (
                    ( n.namespace = e ),
                    ( n.enabled = t.enabled( e ) ),
                    ( n.useColors = t.useColors() ),
                    ( n.color = ( function ( e ) {
                        var r,
                            n = 0;
                        for ( r in e ) ( n = ( n << 5 ) - n + e.charCodeAt( r ) ), ( n |= 0 );
                        return t.colors[ Math.abs( n ) % t.colors.length ];
                    } )( e ) ),
                    ( n.destroy = o ),
                    'function' == typeof t.init && t.init( n ),
                    t.instances.push( n ),
                    n
                );
            }
            function o() {
                var e = t.instances.indexOf( this );
                return -1 !== e && ( t.instances.splice( e, 1 ), !0 );
            }
            ( ( t = e.exports = n.debug = n.default = n ).coerce = function ( e ) {
                return e instanceof Error ? e.stack || e.message : e;
            } ),
                ( t.disable = function () {
                    t.enable( '' );
                } ),
                ( t.enable = function ( e ) {
                    var r;
                    t.save( e ), ( t.names = [] ), ( t.skips = [] );
                    var n = ( 'string' == typeof e ? e : '' ).split( /[\s,]+/ ),
                        o = n.length;
                    for ( r = 0; r < o; r++ )
                        n[ r ] &&
                            ( '-' === ( e = n[ r ].replace( /\*/g, '.*?' ) )[ 0 ] ?
                                t.skips.push( new RegExp( '^' + e.substr( 1 ) + '$' ) ) :
                                t.names.push( new RegExp( '^' + e + '$' ) ) );
                    for ( r = 0; r < t.instances.length; r++ ) {
                        var s = t.instances[ r ];
                        s.enabled = t.enabled( s.namespace );
                    }
                } ),
                ( t.enabled = function ( e ) {
                    if ( '*' === e[ e.length - 1 ] ) return !0;
                    var r, n;
                    for ( r = 0, n = t.skips.length; r < n; r++ )
                        if ( t.skips[ r ].test( e ) ) return !1;
                    for ( r = 0, n = t.names.length; r < n; r++ )
                        if ( t.names[ r ].test( e ) ) return !0;
                    return !1;
                } ),
                ( t.humanize = r( 36 ) ),
                ( t.instances = [] ),
                ( t.names = [] ),
                ( t.skips = [] ),
                ( t.formatters = {} );
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 0 );
            e.exports = function ( e, t ) {
                t = t || {};
                var r = {},
                    o = [ 'url', 'method', 'params', 'data' ],
                    s = [ 'headers', 'auth', 'proxy' ],
                    i = [
                        'baseURL',
                        'url',
                        'transformRequest',
                        'transformResponse',
                        'paramsSerializer',
                        'timeout',
                        'withCredentials',
                        'adapter',
                        'responseType',
                        'xsrfCookieName',
                        'xsrfHeaderName',
                        'onUploadProgress',
                        'onDownloadProgress',
                        'maxContentLength',
                        'validateStatus',
                        'maxRedirects',
                        'httpAgent',
                        'httpsAgent',
                        'cancelToken',
                        'socketPath'
                    ];
                n.forEach( o, function ( e ) {
                    void 0 !== t[ e ] && ( r[ e ] = t[ e ] );
                } ),
                    n.forEach( s, function ( o ) {
                        n.isObject( t[ o ] ) ?
                            ( r[ o ] = n.deepMerge( e[ o ], t[ o ] ) ) :
                            void 0 !== t[ o ] ?
                                ( r[ o ] = t[ o ] ) :
                                n.isObject( e[ o ] ) ?
                                    ( r[ o ] = n.deepMerge( e[ o ] ) ) :
                                    void 0 !== e[ o ] && ( r[ o ] = e[ o ] );
                    } ),
                    n.forEach( i, function ( n ) {
                        void 0 !== t[ n ] ? ( r[ n ] = t[ n ] ) : void 0 !== e[ n ] && ( r[ n ] = e[ n ] );
                    } );
                var a = o.concat( s ).concat( i ),
                    u = Object.keys( t ).filter( function ( e ) {
                        return -1 === a.indexOf( e );
                    } );
                return (
                    n.forEach( u, function ( n ) {
                        void 0 !== t[ n ] ? ( r[ n ] = t[ n ] ) : void 0 !== e[ n ] && ( r[ n ] = e[ n ] );
                    } ),
                    r
                );
            };
        },
        function ( e, _t, _r ) {
            'use strict';
            function n( e ) {
                this.message = e;
            }
            ( n.prototype.toString = function () {
                return 'Cancel' + ( this.message ? ': ' + this.message : '' );
            } ),
                ( n.prototype.__CANCEL__ = !0 ),
                ( e.exports = n );
        },
        function ( _e, t, r ) {
            const n = process.env.SITEMAP_URL,
                o = r( 17 );
            t.handler = async ( e ) => {
                try {
                    const {
                        payload: t
                    } = JSON.parse( e.body ), {
                        state: r,
                        context: s
                    } = t;
                    return n && 'ready' === r && 'production' === s ?
                        ( console.log( `Sending sitemap ping to google for ${ n }` ),
                            await o.get( `http://www.google.com/ping?sitemap=${ n }` ), {
                            statusCode: 200,
                            body: 'Submitted Successfully'
                        } ) :
                        ( console.log( 'Conditions not met, not submitting' ), {
                            statusCode: 200,
                            body: 'Conditions not met, not submitting'
                        } );
                } catch ( e ) {
                    throw ( console.log( e ), e );
                }
            };
        },
        function ( e, _t, r ) {
            e.exports = r( 18 );
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 0 ),
                o = r( 3 ),
                s = r( 19 ),
                i = r( 14 );
            function a( e ) {
                var t = new s( e ),
                    r = o( s.prototype.request, t );
                return n.extend( r, s.prototype, t ), n.extend( r, t ), r;
            }
            var u = a( r( 5 ) );
            ( u.Axios = s ),
                ( u.create = function ( e ) {
                    return a( i( u.defaults, e ) );
                } ),
                ( u.Cancel = r( 15 ) ),
                ( u.CancelToken = r( 45 ) ),
                ( u.isCancel = r( 4 ) ),
                ( u.all = function ( e ) {
                    return Promise.all( e );
                } ),
                ( u.spread = r( 46 ) ),
                ( e.exports = u ),
                ( e.exports.default = u );
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 0 ),
                o = r( 1 ),
                s = r( 20 ),
                i = r( 21 ),
                a = r( 14 );
            function u( e ) {
                ( this.defaults = e ), ( this.interceptors = {
                    request: new s(),
                    response: new s()
                } );
            }
            ( u.prototype.request = function ( e ) {
                'string' == typeof e ? ( ( e = arguments[ 1 ] || {} ).url = arguments[ 0 ] ) : ( e = e || {} ),
                    ( e = a( this.defaults, e ) ).method ?
                        ( e.method = e.method.toLowerCase() ) :
                        this.defaults.method ?
                            ( e.method = this.defaults.method.toLowerCase() ) :
                            ( e.method = 'get' );
                var t = [ i, void 0 ],
                    r = Promise.resolve( e );
                for (
                    this.interceptors.request.forEach( function ( e ) {
                        t.unshift( e.fulfilled, e.rejected );
                    } ),
                    this.interceptors.response.forEach( function ( e ) {
                        t.push( e.fulfilled, e.rejected );
                    } ); t.length;
                )
                    r = r.then( t.shift(), t.shift() );
                return r;
            } ),
                ( u.prototype.getUri = function ( e ) {
                    return ( e = a( this.defaults, e ) ), o( e.url, e.params, e.paramsSerializer ).replace( /^\?/, '' );
                } ),
                n.forEach( [ 'delete', 'get', 'head', 'options' ], function ( e ) {
                    u.prototype[ e ] = function ( t, r ) {
                        return this.request( n.merge( r || {}, {
                            method: e,
                            url: t
                        } ) );
                    };
                } ),
                n.forEach( [ 'post', 'put', 'patch' ], function ( e ) {
                    u.prototype[ e ] = function ( t, r, o ) {
                        return this.request( n.merge( o || {}, {
                            method: e,
                            url: t,
                            data: r
                        } ) );
                    };
                } ),
                ( e.exports = u );
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 0 );
            function o() {
                this.handlers = [];
            }
            ( o.prototype.use = function ( e, t ) {
                return this.handlers.push( {
                    fulfilled: e,
                    rejected: t
                } ), this.handlers.length - 1;
            } ),
                ( o.prototype.eject = function ( e ) {
                    this.handlers[ e ] && ( this.handlers[ e ] = null );
                } ),
                ( o.prototype.forEach = function ( e ) {
                    n.forEach( this.handlers, function ( t ) {
                        null !== t && e( t );
                    } );
                } ),
                ( e.exports = o );
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 0 ),
                o = r( 22 ),
                s = r( 4 ),
                i = r( 5 );
            function a( e ) {
                e.cancelToken && e.cancelToken.throwIfRequested();
            }
            e.exports = function ( e ) {
                return (
                    a( e ),
                    ( e.headers = e.headers || {} ),
                    ( e.data = o( e.data, e.headers, e.transformRequest ) ),
                    ( e.headers = n.merge( e.headers.common || {}, e.headers[ e.method ] || {}, e.headers ) ),
                    n.forEach( [ 'delete', 'get', 'head', 'post', 'put', 'patch', 'common' ], function ( t ) {
                        delete e.headers[ t ];
                    } ),
                    ( e.adapter || i.adapter )( e ).then(
                        function ( t ) {
                            return a( e ), ( t.data = o( t.data, t.headers, e.transformResponse ) ), t;
                        },
                        function ( t ) {
                            return (
                                s( t ) || ( a( e ), t && t.response && ( t.response.data = o( t.response.data, t.response.headers, e.transformResponse ) ) ),
                                Promise.reject( t )
                            );
                        }
                    )
                );
            };
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 0 );
            e.exports = function ( e, t, r ) {
                return (
                    n.forEach( r, function ( r ) {
                        e = r( e, t );
                    } ),
                    e
                );
            };
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 0 );
            e.exports = function ( e, t ) {
                n.forEach( e, function ( r, n ) {
                    n !== t && n.toUpperCase() === t.toUpperCase() && ( ( e[ t ] = r ), delete e[ n ] );
                } );
            };
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 0 ),
                o = r( 6 ),
                s = r( 1 ),
                i = r( 8 ),
                a = r( 27 ),
                u = r( 28 ),
                c = r( 2 );
            e.exports = function ( e ) {
                return new Promise( function ( t, f ) {
                    var p = e.data,
                        l = e.headers;
                    n.isFormData( p ) && delete l[ 'Content-Type' ];
                    var d = new XMLHttpRequest();
                    if ( e.auth ) {
                        var h = e.auth.username || '',
                            m = e.auth.password || '';
                        l.Authorization = 'Basic ' + btoa( h + ':' + m );
                    }
                    var g = i( e.baseURL, e.url );
                    if (
                        ( d.open( e.method.toUpperCase(), s( g, e.params, e.paramsSerializer ), !0 ),
                            ( d.timeout = e.timeout ),
                            ( d.onreadystatechange = function () {
                                if ( d && 4 === d.readyState && ( 0 !== d.status || ( d.responseURL && 0 === d.responseURL.indexOf( 'file:' ) ) ) ) {
                                    var r = 'getAllResponseHeaders' in d ? a( d.getAllResponseHeaders() ) : null,
                                        n = {
                                            data: e.responseType && 'text' !== e.responseType ? d.response : d.responseText,
                                            status: d.status,
                                            statusText: d.statusText,
                                            headers: r,
                                            config: e,
                                            request: d
                                        };
                                    o( t, f, n ), ( d = null );
                                }
                            } ),
                            ( d.onabort = function () {
                                d && ( f( c( 'Request aborted', e, 'ECONNABORTED', d ) ), ( d = null ) );
                            } ),
                            ( d.onerror = function () {
                                f( c( 'Network Error', e, null, d ) ), ( d = null );
                            } ),
                            ( d.ontimeout = function () {
                                var t = 'timeout of ' + e.timeout + 'ms exceeded';
                                e.timeoutErrorMessage && ( t = e.timeoutErrorMessage ), f( c( t, e, 'ECONNABORTED', d ) ), ( d = null );
                            } ),
                            n.isStandardBrowserEnv() )
                    ) {
                        var v = r( 30 ),
                            C = ( e.withCredentials || u( g ) ) && e.xsrfCookieName ? v.read( e.xsrfCookieName ) : void 0;
                        C && ( l[ e.xsrfHeaderName ] = C );
                    }
                    if (
                        ( 'setRequestHeader' in d &&
                            n.forEach( l, function ( e, t ) {
                                void 0 === p && 'content-type' === t.toLowerCase() ? delete l[ t ] : d.setRequestHeader( t, e );
                            } ),
                            n.isUndefined( e.withCredentials ) || ( d.withCredentials = !!e.withCredentials ),
                            e.responseType )
                    )
                        try {
                            d.responseType = e.responseType;
                        } catch ( t ) {
                            if ( 'json' !== e.responseType ) throw t;
                        }
                    'function' == typeof e.onDownloadProgress && d.addEventListener( 'progress', e.onDownloadProgress ),
                        'function' == typeof e.onUploadProgress && d.upload && d.upload.addEventListener( 'progress', e.onUploadProgress ),
                        e.cancelToken &&
                        e.cancelToken.promise.then( function ( e ) {
                            d && ( d.abort(), f( e ), ( d = null ) );
                        } ),
                        void 0 === p && ( p = null ),
                        d.send( p );
                } );
            };
        },
        function ( e, _t, _r ) {
            'use strict';
            e.exports = function ( e ) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test( e );
            };
        },
        function ( e, _t, _r ) {
            'use strict';
            e.exports = function ( e, t ) {
                return t ? e.replace( /\/+$/, '' ) + '/' + t.replace( /^\/+/, '' ) : e;
            };
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 0 ),
                o = [
                    'age',
                    'authorization',
                    'content-length',
                    'content-type',
                    'etag',
                    'expires',
                    'from',
                    'host',
                    'if-modified-since',
                    'if-unmodified-since',
                    'last-modified',
                    'location',
                    'max-forwards',
                    'proxy-authorization',
                    'referer',
                    'retry-after',
                    'user-agent'
                ];
            e.exports = function ( e ) {
                var t,
                    r,
                    s,
                    i = {};
                return e ?
                    ( n.forEach( e.split( '\n' ), function ( e ) {
                        if ( ( ( s = e.indexOf( ':' ) ), ( t = n.trim( e.substr( 0, s ) ).toLowerCase() ), ( r = n.trim( e.substr( s + 1 ) ) ), t ) ) {
                            if ( i[ t ] && o.indexOf( t ) >= 0 ) return;
                            i[ t ] = 'set-cookie' === t ? ( i[ t ] ? i[ t ] : [] ).concat( [ r ] ) : i[ t ] ? i[ t ] + ', ' + r : r;
                        }
                    } ),
                        i ) :
                    i;
            };
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 0 ),
                o = r( 29 );
            e.exports = n.isStandardBrowserEnv() ?
                ( function () {
                    var e,
                        t = /(msie|trident)/i.test( navigator.userAgent ),
                        r = document.createElement( 'a' );
                    function s( e ) {
                        var n = e;
                        if ( o( e ) ) throw new Error( 'URL contains XSS injection attempt' );
                        return (
                            t && ( r.setAttribute( 'href', n ), ( n = r.href ) ),
                            r.setAttribute( 'href', n ), {
                                href: r.href,
                                protocol: r.protocol ? r.protocol.replace( /:$/, '' ) : '',
                                host: r.host,
                                search: r.search ? r.search.replace( /^\?/, '' ) : '',
                                hash: r.hash ? r.hash.replace( /^#/, '' ) : '',
                                hostname: r.hostname,
                                port: r.port,
                                pathname: '/' === r.pathname.charAt( 0 ) ? r.pathname : '/' + r.pathname
                            }
                        );
                    }
                    return (
                        ( e = s( window.location.href ) ),
                        function ( t ) {
                            var r = n.isString( t ) ? s( t ) : t;
                            return r.protocol === e.protocol && r.host === e.host;
                        }
                    );
                } )() :
                function () {
                    return !0;
                };
        },
        function ( e, _t, _r ) {
            'use strict';
            e.exports = function ( e ) {
                return /(\b)(on\w+)=|javascript|(<\s*)(\/*)script/gi.test( e );
            };
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 0 );
            e.exports = n.isStandardBrowserEnv() ? {
                write: function ( e, t, r, o, s, i ) {
                    var a = [];
                    a.push( e + '=' + encodeURIComponent( t ) ),
                        n.isNumber( r ) && a.push( 'expires=' + new Date( r ).toGMTString() ),
                        n.isString( o ) && a.push( 'path=' + o ),
                        n.isString( s ) && a.push( 'domain=' + s ),
                        !0 === i && a.push( 'secure' ),
                        ( document.cookie = a.join( '; ' ) );
                },
                read: function ( e ) {
                    var t = document.cookie.match( new RegExp( '(^|;\\s*)(' + e + ')=([^;]*)' ) );
                    return t ? decodeURIComponent( t[ 3 ] ) : null;
                },
                remove: function ( e ) {
                    this.write( e, '', Date.now() - 864e5 );
                }
            } : {
                write: function () { },
                read: function () {
                    return null;
                },
                remove: function () { }
            };
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 0 ),
                o = r( 6 ),
                s = r( 8 ),
                i = r( 1 ),
                a = r( 9 ),
                u = r( 10 ),
                c = r( 11 ).http,
                f = r( 11 ).https,
                p = r( 12 ),
                l = r( 43 ),
                d = r( 44 ),
                h = r( 2 ),
                m = r( 7 ),
                g = /https:?/;
            e.exports = function ( e ) {
                return new Promise( function ( t, r ) {
                    var v = function ( e ) {
                        t( e );
                    },
                        C = function ( e ) {
                            r( e );
                        },
                        y = e.data,
                        b = e.headers;
                    if ( ( b[ 'User-Agent' ] || b[ 'user-agent' ] || ( b[ 'User-Agent' ] = 'axios/' + d.version ), y && !n.isStream( y ) ) ) {
                        if ( Buffer.isBuffer( y ) );
                        else if ( n.isArrayBuffer( y ) ) y = Buffer.from( new Uint8Array( y ) );
                        else {
                            if ( !n.isString( y ) ) return C( h( 'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream', e ) );
                            y = Buffer.from( y, 'utf-8' );
                        }
                        b[ 'Content-Length' ] = y.length;
                    }
                    var x = void 0;
                    e.auth && ( x = ( e.auth.username || '' ) + ':' + ( e.auth.password || '' ) );
                    var w = s( e.baseURL, e.url ),
                        R = p.parse( w ),
                        O = R.protocol || 'http:';
                    if ( !x && R.auth ) {
                        var E = R.auth.split( ':' );
                        x = ( E[ 0 ] || '' ) + ':' + ( E[ 1 ] || '' );
                    }
                    x && delete b.Authorization;
                    var F = g.test( O ),
                        _ = F ? e.httpsAgent : e.httpAgent,
                        A = {
                            path: i( R.path, e.params, e.paramsSerializer ).replace( /^\?/, '' ),
                            method: e.method.toUpperCase(),
                            headers: b,
                            agent: _,
                            agents: {
                                http: e.httpAgent,
                                https: e.httpsAgent
                            },
                            auth: x
                        };
                    e.socketPath ? ( A.socketPath = e.socketPath ) : ( ( A.hostname = R.hostname ), ( A.port = R.port ) );
                    var j,
                        S = e.proxy;
                    if ( !S && !1 !== S ) {
                        var B = O.slice( 0, -1 ) + '_proxy',
                            T = process.env[ B ] || process.env[ B.toUpperCase() ];
                        if ( T ) {
                            var k = p.parse( T ),
                                N = process.env.no_proxy || process.env.NO_PROXY,
                                q = !0;
                            if ( N )
                                q = !N.split( ',' )
                                    .map( function ( e ) {
                                        return e.trim();
                                    } )
                                    .some( function ( e ) {
                                        return (
                                            !!e && ( '*' === e || ( '.' === e[ 0 ] && R.hostname.substr( R.hostname.length - e.length ) === e ) || R.hostname === e )
                                        );
                                    } );
                            if ( q && ( ( S = {
                                host: k.hostname,
                                port: k.port
                            } ), k.auth ) ) {
                                var L = k.auth.split( ':' );
                                S.auth = {
                                    username: L[ 0 ],
                                    password: L[ 1 ]
                                };
                            }
                        }
                    }
                    if (
                        S &&
                        ( ( A.hostname = S.host ),
                            ( A.host = S.host ),
                            ( A.headers.host = R.hostname + ( R.port ? ':' + R.port : '' ) ),
                            ( A.port = S.port ),
                            ( A.path = O + '//' + R.hostname + ( R.port ? ':' + R.port : '' ) + A.path ),
                            S.auth )
                    ) {
                        var U = Buffer.from( S.auth.username + ':' + S.auth.password, 'utf8' ).toString( 'base64' );
                        A.headers[ 'Proxy-Authorization' ] = 'Basic ' + U;
                    }
                    var P = F && ( !S || g.test( S.protocol ) );
                    e.transport ?
                        ( j = e.transport ) :
                        0 === e.maxRedirects ?
                            ( j = P ? u : a ) :
                            ( e.maxRedirects && ( A.maxRedirects = e.maxRedirects ), ( j = P ? f : c ) ),
                        e.maxContentLength && e.maxContentLength > -1 && ( A.maxBodyLength = e.maxContentLength );
                    var M = j.request( A, function ( t ) {
                        if ( !M.aborted ) {
                            var r = t;
                            switch ( t.headers[ 'content-encoding' ] ) {
                                case 'gzip':
                                case 'compress':
                                case 'deflate':
                                    ( r = 204 === t.statusCode ? r : r.pipe( l.createUnzip() ) ), delete t.headers[ 'content-encoding' ];
                            }
                            var n = t.req || M,
                                s = {
                                    status: t.statusCode,
                                    statusText: t.statusMessage,
                                    headers: t.headers,
                                    config: e,
                                    request: n
                                };
                            if ( 'stream' === e.responseType ) ( s.data = r ), o( v, C, s );
                            else {
                                var i = [];
                                r.on( 'data', function ( t ) {
                                    i.push( t ),
                                        e.maxContentLength > -1 &&
                                        Buffer.concat( i ).length > e.maxContentLength &&
                                        ( r.destroy(), C( h( 'maxContentLength size of ' + e.maxContentLength + ' exceeded', e, null, n ) ) );
                                } ),
                                    r.on( 'error', function ( t ) {
                                        M.aborted || C( m( t, e, null, n ) );
                                    } ),
                                    r.on( 'end', function () {
                                        var t = Buffer.concat( i );
                                        'arraybuffer' !== e.responseType && ( t = t.toString( e.responseEncoding ) ), ( s.data = t ), o( v, C, s );
                                    } );
                            }
                        }
                    } );
                    M.on( 'error', function ( t ) {
                        M.aborted || C( m( t, e, null, M ) );
                    } ),
                        e.timeout &&
                        M.setTimeout( e.timeout, function () {
                            M.abort(), C( h( 'timeout of ' + e.timeout + 'ms exceeded', e, 'ECONNABORTED', M ) );
                        } ),
                        e.cancelToken &&
                        e.cancelToken.promise.then( function ( e ) {
                            M.aborted || ( M.abort(), C( e ) );
                        } ),
                        n.isStream( y ) ?
                            y
                                .on( 'error', function ( t ) {
                                    C( m( t, e, null, M ) );
                                } )
                                .pipe( M ) :
                            M.end( y );
                } );
            };
        },
        function ( e, _t ) {
            e.exports = require( 'assert' );
        },
        function ( e, _t ) {
            e.exports = require( 'stream' );
        },
        function ( e, _t, r ) {
            'undefined' == typeof process || 'renderer' === process.type ? ( e.exports = r( 35 ) ) : ( e.exports = r( 37 ) );
        },
        function ( e, t, r ) {
            function n() {
                var e;
                try {
                    e = t.storage.debug;
                } catch ( e ) { }
                return !e && 'undefined' != typeof process && 'env' in process && ( e = process.env.DEBUG ), e;
            }
            ( ( t = e.exports = r( 13 ) ).log = function () {
                return 'object' == typeof console && console.log && Function.prototype.apply.call( console.log, console, arguments );
            } ),
                ( t.formatArgs = function ( e ) {
                    var r = this.useColors;
                    if ( ( ( e[ 0 ] = ( r ? '%c' : '' ) + this.namespace + ( r ? ' %c' : ' ' ) + e[ 0 ] + ( r ? '%c ' : ' ' ) + '+' + t.humanize( this.diff ) ), !r ) ) return;
                    var n = 'color: ' + this.color;
                    e.splice( 1, 0, n, 'color: inherit' );
                    var o = 0,
                        s = 0;
                    e[ 0 ].replace( /%[a-zA-Z%]/g, function ( e ) {
                        '%%' !== e && ( o++, '%c' === e && ( s = o ) );
                    } ),
                        e.splice( s, 0, n );
                } ),
                ( t.save = function ( e ) {
                    try {
                        null == e ? t.storage.removeItem( 'debug' ) : ( t.storage.debug = e );
                    } catch ( e ) { }
                } ),
                ( t.load = n ),
                ( t.useColors = function () {
                    if ( 'undefined' != typeof window && window.process && 'renderer' === window.process.type ) return !0;
                    if ( 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match( /(edge|trident)\/(\d+)/ ) ) return !1;
                    return (
                        ( 'undefined' != typeof document &&
                            document.documentElement &&
                            document.documentElement.style &&
                            document.documentElement.style.WebkitAppearance ) ||
                        ( 'undefined' != typeof window && window.console && ( window.console.firebug || ( window.console.exception && window.console.table ) ) ) ||
                        ( 'undefined' != typeof navigator &&
                            navigator.userAgent &&
                            navigator.userAgent.toLowerCase().match( /firefox\/(\d+)/ ) &&
                            parseInt( RegExp.$1, 10 ) >= 31 ) ||
                        ( 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match( /applewebkit\/(\d+)/ ) )
                    );
                } ),
                ( t.storage =
                    'undefined' != typeof chrome && void 0 !== chrome.storage ?
                        chrome.storage.local :
                        ( function () {
                            try {
                                return window.localStorage;
                            } catch ( e ) { }
                        } )() ),
                ( t.colors = [
                    '#0000CC',
                    '#0000FF',
                    '#0033CC',
                    '#0033FF',
                    '#0066CC',
                    '#0066FF',
                    '#0099CC',
                    '#0099FF',
                    '#00CC00',
                    '#00CC33',
                    '#00CC66',
                    '#00CC99',
                    '#00CCCC',
                    '#00CCFF',
                    '#3300CC',
                    '#3300FF',
                    '#3333CC',
                    '#3333FF',
                    '#3366CC',
                    '#3366FF',
                    '#3399CC',
                    '#3399FF',
                    '#33CC00',
                    '#33CC33',
                    '#33CC66',
                    '#33CC99',
                    '#33CCCC',
                    '#33CCFF',
                    '#6600CC',
                    '#6600FF',
                    '#6633CC',
                    '#6633FF',
                    '#66CC00',
                    '#66CC33',
                    '#9900CC',
                    '#9900FF',
                    '#9933CC',
                    '#9933FF',
                    '#99CC00',
                    '#99CC33',
                    '#CC0000',
                    '#CC0033',
                    '#CC0066',
                    '#CC0099',
                    '#CC00CC',
                    '#CC00FF',
                    '#CC3300',
                    '#CC3333',
                    '#CC3366',
                    '#CC3399',
                    '#CC33CC',
                    '#CC33FF',
                    '#CC6600',
                    '#CC6633',
                    '#CC9900',
                    '#CC9933',
                    '#CCCC00',
                    '#CCCC33',
                    '#FF0000',
                    '#FF0033',
                    '#FF0066',
                    '#FF0099',
                    '#FF00CC',
                    '#FF00FF',
                    '#FF3300',
                    '#FF3333',
                    '#FF3366',
                    '#FF3399',
                    '#FF33CC',
                    '#FF33FF',
                    '#FF6600',
                    '#FF6633',
                    '#FF9900',
                    '#FF9933',
                    '#FFCC00',
                    '#FFCC33'
                ] ),
                ( t.formatters.j = function ( e ) {
                    try {
                        return JSON.stringify( e );
                    } catch ( e ) {
                        return '[UnexpectedJSONParseError]: ' + e.message;
                    }
                } ),
                t.enable( n() );
        },
        function ( e, _t ) {
            var r = 1e3,
                n = 6e4,
                o = 36e5,
                s = 24 * o;
            function i( e, t, r ) {
                if ( !( e < t ) ) return e < 1.5 * t ? Math.floor( e / t ) + ' ' + r : Math.ceil( e / t ) + ' ' + r + 's';
            }
            e.exports = function ( e, t ) {
                t = t || {};
                var a,
                    u = typeof e;
                if ( 'string' === u && e.length > 0 )
                    return ( function ( e ) {
                        if ( ( e = String( e ) ).length > 100 ) return;
                        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec( e );
                        if ( !t ) return;
                        var i = parseFloat( t[ 1 ] );
                        switch ( ( t[ 2 ] || 'ms' ).toLowerCase() ) {
                            case 'years':
                            case 'year':
                            case 'yrs':
                            case 'yr':
                            case 'y':
                                return 315576e5 * i;
                            case 'days':
                            case 'day':
                            case 'd':
                                return i * s;
                            case 'hours':
                            case 'hour':
                            case 'hrs':
                            case 'hr':
                            case 'h':
                                return i * o;
                            case 'minutes':
                            case 'minute':
                            case 'mins':
                            case 'min':
                            case 'm':
                                return i * n;
                            case 'seconds':
                            case 'second':
                            case 'secs':
                            case 'sec':
                            case 's':
                                return i * r;
                            case 'milliseconds':
                            case 'millisecond':
                            case 'msecs':
                            case 'msec':
                            case 'ms':
                                return i;
                            default:
                                return;
                        }
                    } )( e );
                if ( 'number' === u && !1 === isNaN( e ) )
                    return t.long ?
                        i( ( a = e ), s, 'day' ) || i( a, o, 'hour' ) || i( a, n, 'minute' ) || i( a, r, 'second' ) || a + ' ms' :
                        ( function ( e ) {
                            if ( e >= s ) return Math.round( e / s ) + 'd';
                            if ( e >= o ) return Math.round( e / o ) + 'h';
                            if ( e >= n ) return Math.round( e / n ) + 'm';
                            if ( e >= r ) return Math.round( e / r ) + 's';
                            return e + 'ms';
                        } )( e );
                throw new Error( 'val is not a non-empty string or a valid number. val=' + JSON.stringify( e ) );
            };
        },
        function ( e, t, r ) {
            var n = r( 38 ),
                o = r( 39 );
            ( ( t = e.exports = r( 13 ) ).init = function ( e ) {
                e.inspectOpts = {};
                for ( var r = Object.keys( t.inspectOpts ), n = 0; n < r.length; n++ ) e.inspectOpts[ r[ n ] ] = t.inspectOpts[ r[ n ] ];
            } ),
                ( t.log = function () {
                    return process.stderr.write( o.format.apply( o, arguments ) + '\n' );
                } ),
                ( t.formatArgs = function ( e ) {
                    var r = this.namespace;
                    if ( this.useColors ) {
                        var n = this.color,
                            o = '[3' + ( n < 8 ? n : '8;5;' + n ),
                            s = '  ' + o + ';1m' + r + ' [0m';
                        ( e[ 0 ] = s + e[ 0 ].split( '\n' ).join( '\n' + s ) ), e.push( o + 'm+' + t.humanize( this.diff ) + '[0m' );
                    } else e[ 0 ] = ( t.inspectOpts.hideDate ? '' : new Date().toISOString() + ' ' ) + r + ' ' + e[ 0 ];
                } ),
                ( t.save = function ( e ) {
                    null == e ? delete process.env.DEBUG : ( process.env.DEBUG = e );
                } ),
                ( t.load = i ),
                ( t.useColors = function () {
                    return 'colors' in t.inspectOpts ? Boolean( t.inspectOpts.colors ) : n.isatty( process.stderr.fd );
                } ),
                ( t.colors = [ 6, 2, 3, 4, 5, 1 ] );
            try {
                var s = r( 40 );
                s &&
                    s.level >= 2 &&
                    ( t.colors = [
                        20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112,
                        113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197,
                        198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221
                    ] );
            } catch ( e ) { }
            function i() {
                return process.env.DEBUG;
            }
            ( t.inspectOpts = Object.keys( process.env )
                .filter( function ( e ) {
                    return /^debug_/i.test( e );
                } )
                .reduce( function ( e, t ) {
                    var r = t
                        .substring( 6 )
                        .toLowerCase()
                        .replace( /_([a-z])/g, function ( _e, t ) {
                            return t.toUpperCase();
                        } ),
                        n = process.env[ t ];
                    return (
                        ( n = !!/^(yes|on|true|enabled)$/i.test( n ) || ( !/^(no|off|false|disabled)$/i.test( n ) && ( 'null' === n ? null : Number( n ) ) ) ),
                        ( e[ r ] = n ),
                        e
                    );
                }, {} ) ),
                ( t.formatters.o = function ( e ) {
                    return (
                        ( this.inspectOpts.colors = this.useColors ),
                        o
                            .inspect( e, this.inspectOpts )
                            .split( '\n' )
                            .map( function ( e ) {
                                return e.trim();
                            } )
                            .join( ' ' )
                    );
                } ),
                ( t.formatters.O = function ( e ) {
                    return ( this.inspectOpts.colors = this.useColors ), o.inspect( e, this.inspectOpts );
                } ),
                t.enable( i() );
        },
        function ( e, _t ) {
            e.exports = require( 'tty' );
        },
        function ( e, _t ) {
            e.exports = require( 'util' );
        },
        function ( e, _t, r ) {
            'use strict';
            const n = r( 41 ),
                o = r( 42 ),
                s = process.env;
            let i;
            function a( e ) {
                return ( function ( e ) {
                    return (
                        0 !== e && {
                            level: e,
                            hasBasic: !0,
                            has256: e >= 2,
                            has16m: e >= 3
                        }
                    );
                } )(
                    ( function ( e ) {
                        if ( !1 === i ) return 0;
                        if ( o( 'color=16m' ) || o( 'color=full' ) || o( 'color=truecolor' ) ) return 3;
                        if ( o( 'color=256' ) ) return 2;
                        if ( e && !e.isTTY && !0 !== i ) return 0;
                        const t = i ? 1 : 0;
                        if ( 'win32' === process.platform ) {
                            const e = n.release().split( '.' );
                            return Number( process.versions.node.split( '.' )[ 0 ] ) >= 8 && Number( e[ 0 ] ) >= 10 && Number( e[ 2 ] ) >= 10586 ?
                                Number( e[ 2 ] ) >= 14931 ?
                                    3 :
                                    2 :
                                1;
                        }
                        if ( 'CI' in s ) return [ 'TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI' ].some( ( e ) => e in s ) || 'codeship' === s.CI_NAME ? 1 : t;
                        if ( 'TEAMCITY_VERSION' in s ) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test( s.TEAMCITY_VERSION ) ? 1 : 0;
                        if ( 'truecolor' === s.COLORTERM ) return 3;
                        if ( 'TERM_PROGRAM' in s ) {
                            const e = parseInt( ( s.TERM_PROGRAM_VERSION || '' ).split( '.' )[ 0 ], 10 );
                            switch ( s.TERM_PROGRAM ) {
                                case 'iTerm.app':
                                    return e >= 3 ? 3 : 2;
                                case 'Apple_Terminal':
                                    return 2;
                            }
                        }
                        return /-256(color)?$/i.test( s.TERM ) ?
                            2 :
                            /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test( s.TERM ) ?
                                1 :
                                'COLORTERM' in s ?
                                    1 :
                                    ( s.TERM, t );
                    } )( e )
                );
            }
            o( 'no-color' ) || o( 'no-colors' ) || o( 'color=false' ) ? ( i = !1 ) : ( o( 'color' ) || o( 'colors' ) || o( 'color=true' ) || o( 'color=always' ) ) && ( i = !0 ),
                'FORCE_COLOR' in s && ( i = 0 === s.FORCE_COLOR.length || 0 !== parseInt( s.FORCE_COLOR, 10 ) ),
                ( e.exports = {
                    supportsColor: a,
                    stdout: a( process.stdout ),
                    stderr: a( process.stderr )
                } );
        },
        function ( e, _t ) {
            e.exports = require( 'os' );
        },
        function ( e, _t, _r ) {
            'use strict';
            e.exports = ( e, t ) => {
                t = t || process.argv;
                const r = e.startsWith( '-' ) ? '' : 1 === e.length ? '-' : '--',
                    n = t.indexOf( r + e ),
                    o = t.indexOf( '--' );
                return -1 !== n && ( -1 === o || n < o );
            };
        },
        function ( e, _t ) {
            e.exports = require( 'zlib' );
        },
        function ( e ) {
            e.exports = JSON.parse(
                '{"name":"axios","version":"0.19.1","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test && bundlesize","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://github.com/axios/axios","devDependencies":{"bundlesize":"^0.17.0","coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.0.2","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^20.1.0","grunt-karma":"^2.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^1.3.0","karma-chrome-launcher":"^2.2.0","karma-coverage":"^1.1.1","karma-firefox-launcher":"^1.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.2.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^5.2.0","sinon":"^4.5.0","typescript":"^2.8.1","url-search-params":"^0.10.0","webpack":"^1.13.1","webpack-dev-server":"^1.14.1"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"typings":"./index.d.ts","dependencies":{"follow-redirects":"1.5.10"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}'
            );
        },
        function ( e, _t, r ) {
            'use strict';
            var n = r( 15 );
            function o( e ) {
                if ( 'function' != typeof e ) throw new TypeError( 'executor must be a function.' );
                var t;
                this.promise = new Promise( function ( e ) {
                    t = e;
                } );
                var r = this;
                e( function ( e ) {
                    r.reason || ( ( r.reason = new n( e ) ), t( r.reason ) );
                } );
            }
            ( o.prototype.throwIfRequested = function () {
                if ( this.reason ) throw this.reason;
            } ),
                ( o.source = function () {
                    var e;
                    return {
                        token: new o( function ( t ) {
                            e = t;
                        } ),
                        cancel: e
                    };
                } ),
                ( e.exports = o );
        },
        function ( e, _t, _r ) {
            'use strict';
            e.exports = function ( e ) {
                return function ( t ) {
                    return e.apply( null, t );
                };
            };
        }
    ] )
);
