!(function (t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define([], t)
        : (('undefined' != typeof window
              ? window
              : 'undefined' != typeof global
              ? global
              : 'undefined' != typeof self
              ? self
              : this
          ).Qs = t())
})(function () {
    return (function o(n, i, a) {
        function p(e, t) {
            if (!i[e]) {
                if (!n[e]) {
                    var r = 'function' == typeof require && require
                    if (!t && r) return r(e, !0)
                    if (c) return c(e, !0)
                    throw (
                        (((r = new Error(
                            "Cannot find module '" + e + "'"
                        )).code = 'MODULE_NOT_FOUND'),
                        r)
                    )
                }
                ;(r = i[e] =
                    {
                        exports: {},
                    }),
                    n[e][0].call(
                        r.exports,
                        function (t) {
                            return p(n[e][1][t] || t)
                        },
                        r,
                        r.exports,
                        o,
                        n,
                        i,
                        a
                    )
            }
            return i[e].exports
        }
        for (
            var c = 'function' == typeof require && require, t = 0;
            t < a.length;
            t++
        )
            p(a[t])
        return p
    })(
        {
            1: [
                function (t, e, r) {
                    'use strict'
                    var o = String.prototype.replace,
                        n = /%20/g,
                        i = 'RFC1738',
                        a = 'RFC3986'
                    e.exports = {
                        default: a,
                        formatters: {
                            RFC1738: function (t) {
                                return o.call(t, n, '+')
                            },
                            RFC3986: function (t) {
                                return String(t)
                            },
                        },
                        RFC1738: i,
                        RFC3986: a,
                    }
                },
                {},
            ],
            2: [
                function (t, e, r) {
                    'use strict'
                    var o = t('./stringify'),
                        n = t('./parse'),
                        t = t('./formats')
                    e.exports = {
                        formats: t,
                        parse: n,
                        stringify: o,
                    }
                },
                {
                    './formats': 1,
                    './parse': 3,
                    './stringify': 4,
                },
            ],
            3: [
                function (t, e, r) {
                    'use strict'

                    function l(t, e) {
                        return t &&
                            'string' == typeof t &&
                            e.comma &&
                            -1 < t.indexOf(',')
                            ? t.split(',')
                            : t
                    }

                    function c(t, e) {
                        var r,
                            o,
                            n,
                            i,
                            a = {},
                            p = e.ignoreQueryPrefix ? t.replace(/^\?/, '') : t,
                            t =
                                e.parameterLimit === 1 / 0
                                    ? void 0
                                    : e.parameterLimit,
                            c = p.split(e.delimiter, t),
                            u = -1,
                            f = e.charset
                        if (e.charsetSentinel)
                            for (r = 0; r < c.length; ++r)
                                0 === c[r].indexOf('utf8=') &&
                                    ('utf8=%E2%9C%93' === c[r]
                                        ? (f = 'utf-8')
                                        : 'utf8=%26%2310003%3B' === c[r] &&
                                          (f = 'iso-8859-1'),
                                    (u = r),
                                    (r = c.length))
                        for (r = 0; r < c.length; ++r)
                            r !== u &&
                                ((i =
                                    -1 ===
                                    (i =
                                        -1 === (i = (o = c[r]).indexOf(']='))
                                            ? o.indexOf('=')
                                            : i + 1)
                                        ? ((n = e.decoder(
                                              o,
                                              g.decoder,
                                              f,
                                              'key'
                                          )),
                                          e.strictNullHandling ? null : '')
                                        : ((n = e.decoder(
                                              o.slice(0, i),
                                              g.decoder,
                                              f,
                                              'key'
                                          )),
                                          y.maybeMap(
                                              l(o.slice(i + 1), e),
                                              function (t) {
                                                  return e.decoder(
                                                      t,
                                                      g.decoder,
                                                      f,
                                                      'value'
                                                  )
                                              }
                                          ))) &&
                                    e.interpretNumericEntities &&
                                    'iso-8859-1' === f &&
                                    (i = i.replace(
                                        /&#(\d+);/g,
                                        function (t, e) {
                                            return String.fromCharCode(
                                                parseInt(e, 10)
                                            )
                                        }
                                    )),
                                -1 < o.indexOf('[]=') && (i = d(i) ? [i] : i),
                                s.call(a, n)
                                    ? (a[n] = y.combine(a[n], i))
                                    : (a[n] = i))
                        return a
                    }

                    function u(t, e, r, o) {
                        if (t) {
                            var n = r.allowDots
                                    ? t.replace(/\.([^.[]+)/g, '[$1]')
                                    : t,
                                i = /(\[[^[\]]*])/g,
                                a = 0 < r.depth && /(\[[^[\]]*])/.exec(n),
                                t = a ? n.slice(0, a.index) : n,
                                p = []
                            if (t) {
                                if (
                                    !r.plainObjects &&
                                    s.call(Object.prototype, t) &&
                                    !r.allowPrototypes
                                )
                                    return
                                p.push(t)
                            }
                            for (
                                var c = 0;
                                0 < r.depth &&
                                null !== (a = i.exec(n)) &&
                                c < r.depth;

                            ) {
                                if (
                                    ((c += 1),
                                    !r.plainObjects &&
                                        s.call(
                                            Object.prototype,
                                            a[1].slice(1, -1)
                                        ) &&
                                        !r.allowPrototypes)
                                )
                                    return
                                p.push(a[1])
                            }
                            return (
                                a && p.push('[' + n.slice(a.index) + ']'),
                                (function (t, e, r, o) {
                                    for (
                                        var n = o ? e : l(e, r),
                                            i = t.length - 1;
                                        0 <= i;
                                        --i
                                    ) {
                                        var a,
                                            p,
                                            c,
                                            u = t[i]
                                        '[]' === u && r.parseArrays
                                            ? (a = [].concat(n))
                                            : ((a = r.plainObjects
                                                  ? Object.create(null)
                                                  : {}),
                                              (p =
                                                  '[' === u.charAt(0) &&
                                                  ']' === u.charAt(u.length - 1)
                                                      ? u.slice(1, -1)
                                                      : u),
                                              (c = parseInt(p, 10)),
                                              r.parseArrays || '' !== p
                                                  ? !isNaN(c) &&
                                                    u !== p &&
                                                    String(c) === p &&
                                                    0 <= c &&
                                                    r.parseArrays &&
                                                    c <= r.arrayLimit
                                                      ? ((a = [])[c] = n)
                                                      : (a[p] = n)
                                                  : (a = {
                                                        0: n,
                                                    })),
                                            (n = a)
                                    }
                                    return n
                                })(p, e, r, o)
                            )
                        }
                    }
                    var y = t('./utils'),
                        s = Object.prototype.hasOwnProperty,
                        d = Array.isArray,
                        g = {
                            allowDots: !1,
                            allowPrototypes: !1,
                            allowSparse: !1,
                            arrayLimit: 20,
                            charset: 'utf-8',
                            charsetSentinel: !1,
                            comma: !1,
                            decoder: y.decode,
                            delimiter: '&',
                            depth: 5,
                            ignoreQueryPrefix: !1,
                            interpretNumericEntities: !1,
                            parameterLimit: 1e3,
                            parseArrays: !0,
                            plainObjects: !1,
                            strictNullHandling: !1,
                        }
                    e.exports = function (t, e) {
                        var r = (function (t) {
                            if (!t) return g
                            if (
                                null !== t.decoder &&
                                void 0 !== t.decoder &&
                                'function' != typeof t.decoder
                            )
                                throw new TypeError(
                                    'Decoder has to be a function.'
                                )
                            if (
                                void 0 !== t.charset &&
                                'utf-8' !== t.charset &&
                                'iso-8859-1' !== t.charset
                            )
                                throw new TypeError(
                                    'The charset option must be either utf-8, iso-8859-1, or undefined'
                                )
                            var e = (void 0 === t.charset ? g : t).charset
                            return {
                                allowDots:
                                    void 0 === t.allowDots
                                        ? g.allowDots
                                        : !!t.allowDots,
                                allowPrototypes: ('boolean' ==
                                typeof t.allowPrototypes
                                    ? t
                                    : g
                                ).allowPrototypes,
                                allowSparse: ('boolean' == typeof t.allowSparse
                                    ? t
                                    : g
                                ).allowSparse,
                                arrayLimit: ('number' == typeof t.arrayLimit
                                    ? t
                                    : g
                                ).arrayLimit,
                                charset: e,
                                charsetSentinel: ('boolean' ==
                                typeof t.charsetSentinel
                                    ? t
                                    : g
                                ).charsetSentinel,
                                comma: ('boolean' == typeof t.comma ? t : g)
                                    .comma,
                                decoder: ('function' == typeof t.decoder
                                    ? t
                                    : g
                                ).decoder,
                                delimiter: ('string' == typeof t.delimiter ||
                                y.isRegExp(t.delimiter)
                                    ? t
                                    : g
                                ).delimiter,
                                depth:
                                    'number' == typeof t.depth || !1 === t.depth
                                        ? +t.depth
                                        : g.depth,
                                ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
                                interpretNumericEntities: ('boolean' ==
                                typeof t.interpretNumericEntities
                                    ? t
                                    : g
                                ).interpretNumericEntities,
                                parameterLimit: ('number' ==
                                typeof t.parameterLimit
                                    ? t
                                    : g
                                ).parameterLimit,
                                parseArrays: !1 !== t.parseArrays,
                                plainObjects: ('boolean' ==
                                typeof t.plainObjects
                                    ? t
                                    : g
                                ).plainObjects,
                                strictNullHandling: ('boolean' ==
                                typeof t.strictNullHandling
                                    ? t
                                    : g
                                ).strictNullHandling,
                            }
                        })(e)
                        if ('' === t || null == t)
                            return r.plainObjects ? Object.create(null) : {}
                        for (
                            var o = 'string' == typeof t ? c(t, r) : t,
                                n = r.plainObjects ? Object.create(null) : {},
                                i = Object.keys(o),
                                a = 0;
                            a < i.length;
                            ++a
                        )
                            var p = i[a],
                                p = u(p, o[p], r, 'string' == typeof t),
                                n = y.merge(n, p, r)
                        return !0 === r.allowSparse ? n : y.compact(n)
                    }
                },
                {
                    './utils': 5,
                },
            ],
            4: [
                function (t, e, r) {
                    'use strict'

                    function j(t, e) {
                        o.apply(t, P(e) ? e : [e])
                    }

                    function O(t, e, r, o, n, i, a, p, c, u, f, l, y, s, d) {
                        var g = t
                        if (d.has(t))
                            throw new RangeError('Cyclic object value')
                        if (
                            ('function' == typeof a
                                ? (g = a(e, g))
                                : g instanceof Date
                                ? (g = u(g))
                                : 'comma' === r &&
                                  P(g) &&
                                  (g = w.maybeMap(g, function (t) {
                                      return t instanceof Date ? u(t) : t
                                  })),
                            null === g)
                        ) {
                            if (o)
                                return i && !y
                                    ? i(e, x.encoder, s, 'key', f)
                                    : e
                            g = ''
                        }
                        if (
                            ((b = g),
                            'string' == typeof b ||
                                'number' == typeof b ||
                                'boolean' == typeof b ||
                                'symbol' == typeof b ||
                                'bigint' == typeof b ||
                                w.isBuffer(g))
                        )
                            return i
                                ? [
                                      l(y ? e : i(e, x.encoder, s, 'key', f)) +
                                          '=' +
                                          l(i(g, x.encoder, s, 'value', f)),
                                  ]
                                : [l(e) + '=' + l(String(g))]
                        var b,
                            h,
                            m = []
                        if (void 0 === g) return m
                        h =
                            'comma' === r && P(g)
                                ? [
                                      {
                                          value:
                                              0 < g.length
                                                  ? g.join(',') || null
                                                  : void 0,
                                      },
                                  ]
                                : P(a)
                                ? a
                                : ((b = Object.keys(g)), p ? b.sort(p) : b)
                        for (var v = 0; v < h.length; ++v) {
                            var S = h[v],
                                A =
                                    'object' == typeof S && void 0 !== S.value
                                        ? S.value
                                        : g[S]
                            ;(n && null === A) ||
                                ((S = P(g)
                                    ? 'function' == typeof r
                                        ? r(e, S)
                                        : e
                                    : e + (c ? '.' + S : '[' + S + ']')),
                                d.set(t, !0),
                                j(
                                    m,
                                    O(
                                        A,
                                        S,
                                        r,
                                        o,
                                        n,
                                        i,
                                        a,
                                        p,
                                        c,
                                        u,
                                        f,
                                        l,
                                        y,
                                        s,
                                        d
                                    )
                                ))
                        }
                        return m
                    }
                    var f = t('side-channel'),
                        w = t('./utils'),
                        l = t('./formats'),
                        y = Object.prototype.hasOwnProperty,
                        s = {
                            brackets: function (t) {
                                return t + '[]'
                            },
                            comma: 'comma',
                            indices: function (t, e) {
                                return t + '[' + e + ']'
                            },
                            repeat: function (t) {
                                return t
                            },
                        },
                        P = Array.isArray,
                        o = Array.prototype.push,
                        n = Date.prototype.toISOString,
                        t = l.default,
                        x = {
                            addQueryPrefix: !1,
                            allowDots: !1,
                            charset: 'utf-8',
                            charsetSentinel: !1,
                            delimiter: '&',
                            encode: !0,
                            encoder: w.encode,
                            encodeValuesOnly: !1,
                            format: t,
                            formatter: l.formatters[t],
                            indices: !1,
                            serializeDate: function (t) {
                                return n.call(t)
                            },
                            skipNulls: !1,
                            strictNullHandling: !1,
                        }
                    e.exports = function (t, e) {
                        var r = t,
                            o = (function (t) {
                                if (!t) return x
                                if (
                                    null !== t.encoder &&
                                    void 0 !== t.encoder &&
                                    'function' != typeof t.encoder
                                )
                                    throw new TypeError(
                                        'Encoder has to be a function.'
                                    )
                                var e = t.charset || x.charset
                                if (
                                    void 0 !== t.charset &&
                                    'utf-8' !== t.charset &&
                                    'iso-8859-1' !== t.charset
                                )
                                    throw new TypeError(
                                        'The charset option must be either utf-8, iso-8859-1, or undefined'
                                    )
                                var r = l.default
                                if (void 0 !== t.format) {
                                    if (!y.call(l.formatters, t.format))
                                        throw new TypeError(
                                            'Unknown format option provided.'
                                        )
                                    r = t.format
                                }
                                var o = l.formatters[r],
                                    n = x.filter
                                return (
                                    ('function' != typeof t.filter &&
                                        !P(t.filter)) ||
                                        (n = t.filter),
                                    {
                                        addQueryPrefix: ('boolean' ==
                                        typeof t.addQueryPrefix
                                            ? t
                                            : x
                                        ).addQueryPrefix,
                                        allowDots:
                                            void 0 === t.allowDots
                                                ? x.allowDots
                                                : !!t.allowDots,
                                        charset: e,
                                        charsetSentinel: ('boolean' ==
                                        typeof t.charsetSentinel
                                            ? t
                                            : x
                                        ).charsetSentinel,
                                        delimiter: (void 0 === t.delimiter
                                            ? x
                                            : t
                                        ).delimiter,
                                        encode: ('boolean' == typeof t.encode
                                            ? t
                                            : x
                                        ).encode,
                                        encoder: ('function' == typeof t.encoder
                                            ? t
                                            : x
                                        ).encoder,
                                        encodeValuesOnly: ('boolean' ==
                                        typeof t.encodeValuesOnly
                                            ? t
                                            : x
                                        ).encodeValuesOnly,
                                        filter: n,
                                        format: r,
                                        formatter: o,
                                        serializeDate: ('function' ==
                                        typeof t.serializeDate
                                            ? t
                                            : x
                                        ).serializeDate,
                                        skipNulls: ('boolean' ==
                                        typeof t.skipNulls
                                            ? t
                                            : x
                                        ).skipNulls,
                                        sort:
                                            'function' == typeof t.sort
                                                ? t.sort
                                                : null,
                                        strictNullHandling: ('boolean' ==
                                        typeof t.strictNullHandling
                                            ? t
                                            : x
                                        ).strictNullHandling,
                                    }
                                )
                            })(e)
                        'function' == typeof o.filter
                            ? (r = (0, o.filter)('', r))
                            : P(o.filter) && (a = o.filter)
                        var n = []
                        if ('object' != typeof r || null === r) return ''
                        t =
                            e && e.arrayFormat in s
                                ? e.arrayFormat
                                : !(e && 'indices' in e) || e.indices
                                ? 'indices'
                                : 'repeat'
                        var i = s[t],
                            a = a || Object.keys(r)
                        o.sort && a.sort(o.sort)
                        for (var p = f(), c = 0; c < a.length; ++c) {
                            var u = a[c]
                            ;(o.skipNulls && null === r[u]) ||
                                j(
                                    n,
                                    O(
                                        r[u],
                                        u,
                                        i,
                                        o.strictNullHandling,
                                        o.skipNulls,
                                        o.encode ? o.encoder : null,
                                        o.filter,
                                        o.sort,
                                        o.allowDots,
                                        o.serializeDate,
                                        o.format,
                                        o.formatter,
                                        o.encodeValuesOnly,
                                        o.charset,
                                        p
                                    )
                                )
                        }
                        ;(e = n.join(o.delimiter)),
                            (t = !0 === o.addQueryPrefix ? '?' : '')
                        return (
                            o.charsetSentinel &&
                                ('iso-8859-1' === o.charset
                                    ? (t += 'utf8=%26%2310003%3B&')
                                    : (t += 'utf8=%E2%9C%93&')),
                            0 < e.length ? t + e : ''
                        )
                    }
                },
                {
                    './formats': 1,
                    './utils': 5,
                    'side-channel': 16,
                },
            ],
            5: [
                function (t, e, r) {
                    'use strict'

                    function p(t, e) {
                        for (
                            var r =
                                    e && e.plainObjects
                                        ? Object.create(null)
                                        : {},
                                o = 0;
                            o < t.length;
                            ++o
                        )
                            void 0 !== t[o] && (r[o] = t[o])
                        return r
                    }
                    var u = t('./formats'),
                        c = Object.prototype.hasOwnProperty,
                        f = Array.isArray,
                        l = (function () {
                            for (var t = [], e = 0; e < 256; ++e)
                                t.push(
                                    '%' +
                                        (
                                            (e < 16 ? '0' : '') + e.toString(16)
                                        ).toUpperCase()
                                )
                            return t
                        })(),
                        t = function o(n, i, a) {
                            if (!i) return n
                            if ('object' != typeof i) {
                                if (f(n)) n.push(i)
                                else {
                                    if (!n || 'object' != typeof n)
                                        return [n, i]
                                    ;((a &&
                                        (a.plainObjects ||
                                            a.allowPrototypes)) ||
                                        !c.call(Object.prototype, i)) &&
                                        (n[i] = !0)
                                }
                                return n
                            }
                            if (!n || 'object' != typeof n) return [n].concat(i)
                            var t = n
                            return (
                                f(n) && !f(i) && (t = p(n, a)),
                                f(n) && f(i)
                                    ? (i.forEach(function (t, e) {
                                          var r
                                          c.call(n, e)
                                              ? (r = n[e]) &&
                                                'object' == typeof r &&
                                                t &&
                                                'object' == typeof t
                                                  ? (n[e] = o(r, t, a))
                                                  : n.push(t)
                                              : (n[e] = t)
                                      }),
                                      n)
                                    : Object.keys(i).reduce(function (t, e) {
                                          var r = i[e]
                                          return (
                                              c.call(t, e)
                                                  ? (t[e] = o(t[e], r, a))
                                                  : (t[e] = r),
                                              t
                                          )
                                      }, t)
                            )
                        }
                    e.exports = {
                        arrayToObject: p,
                        assign: function (t, r) {
                            return Object.keys(r).reduce(function (t, e) {
                                return (t[e] = r[e]), t
                            }, t)
                        },
                        combine: function (t, e) {
                            return [].concat(t, e)
                        },
                        compact: function (t) {
                            for (
                                var e = [
                                        {
                                            obj: {
                                                o: t,
                                            },
                                            prop: 'o',
                                        },
                                    ],
                                    r = [],
                                    o = 0;
                                o < e.length;
                                ++o
                            )
                                for (
                                    var n = e[o],
                                        i = n.obj[n.prop],
                                        a = Object.keys(i),
                                        p = 0;
                                    p < a.length;
                                    ++p
                                ) {
                                    var c = a[p],
                                        u = i[c]
                                    'object' == typeof u &&
                                        null !== u &&
                                        -1 === r.indexOf(u) &&
                                        (e.push({
                                            obj: i,
                                            prop: c,
                                        }),
                                        r.push(u))
                                }
                            return (
                                (function (t) {
                                    for (; 1 < t.length; ) {
                                        var e = t.pop(),
                                            r = e.obj[e.prop]
                                        if (f(r)) {
                                            for (
                                                var o = [], n = 0;
                                                n < r.length;
                                                ++n
                                            )
                                                void 0 !== r[n] && o.push(r[n])
                                            e.obj[e.prop] = o
                                        }
                                    }
                                })(e),
                                t
                            )
                        },
                        decode: function (t, e, r) {
                            var o = t.replace(/\+/g, ' ')
                            if ('iso-8859-1' === r)
                                return o.replace(/%[0-9a-f]{2}/gi, unescape)
                            try {
                                return decodeURIComponent(o)
                            } catch (t) {
                                return o
                            }
                        },
                        encode: function (t, e, r, o, n) {
                            if (0 === t.length) return t
                            var i = t
                            if (
                                ('symbol' == typeof t
                                    ? (i = Symbol.prototype.toString.call(t))
                                    : 'string' != typeof t && (i = String(t)),
                                'iso-8859-1' === r)
                            )
                                return escape(i).replace(
                                    /%u[0-9a-f]{4}/gi,
                                    function (t) {
                                        return (
                                            '%26%23' +
                                            parseInt(t.slice(2), 16) +
                                            '%3B'
                                        )
                                    }
                                )
                            for (var a = '', p = 0; p < i.length; ++p) {
                                var c = i.charCodeAt(p)
                                45 === c ||
                                46 === c ||
                                95 === c ||
                                126 === c ||
                                (48 <= c && c <= 57) ||
                                (65 <= c && c <= 90) ||
                                (97 <= c && c <= 122) ||
                                (n === u.RFC1738 && (40 === c || 41 === c))
                                    ? (a += i.charAt(p))
                                    : c < 128
                                    ? (a += l[c])
                                    : c < 2048
                                    ? (a +=
                                          l[192 | (c >> 6)] + l[128 | (63 & c)])
                                    : c < 55296 || 57344 <= c
                                    ? (a +=
                                          l[224 | (c >> 12)] +
                                          l[128 | ((c >> 6) & 63)] +
                                          l[128 | (63 & c)])
                                    : ((p += 1),
                                      (c =
                                          65536 +
                                          (((1023 & c) << 10) |
                                              (1023 & i.charCodeAt(p)))),
                                      (a +=
                                          l[240 | (c >> 18)] +
                                          l[128 | ((c >> 12) & 63)] +
                                          l[128 | ((c >> 6) & 63)] +
                                          l[128 | (63 & c)]))
                            }
                            return a
                        },
                        isBuffer: function (t) {
                            return (
                                !(!t || 'object' != typeof t) &&
                                !!(
                                    t.constructor &&
                                    t.constructor.isBuffer &&
                                    t.constructor.isBuffer(t)
                                )
                            )
                        },
                        isRegExp: function (t) {
                            return (
                                '[object RegExp]' ===
                                Object.prototype.toString.call(t)
                            )
                        },
                        maybeMap: function (t, e) {
                            if (f(t)) {
                                for (var r = [], o = 0; o < t.length; o += 1)
                                    r.push(e(t[o]))
                                return r
                            }
                            return e(t)
                        },
                        merge: t,
                    }
                },
                {
                    './formats': 1,
                },
            ],
            6: [function (t, e, r) {}, {}],
            7: [
                function (t, e, r) {
                    'use strict'
                    var o = t('get-intrinsic'),
                        n = t('./'),
                        i = n(o('String.prototype.indexOf'))
                    e.exports = function (t, e) {
                        e = o(t, !!e)
                        return 'function' == typeof e &&
                            -1 < i(t, '.prototype.')
                            ? n(e)
                            : e
                    }
                },
                {
                    './': 8,
                    'get-intrinsic': 11,
                },
            ],
            8: [
                function (t, e, r) {
                    'use strict'
                    var o = t('function-bind'),
                        t = t('get-intrinsic'),
                        n = t('%Function.prototype.apply%'),
                        i = t('%Function.prototype.call%'),
                        a = t('%Reflect.apply%', !0) || o.call(i, n),
                        p = t('%Object.getOwnPropertyDescriptor%', !0),
                        c = t('%Object.defineProperty%', !0),
                        u = t('%Math.max%')
                    if (c)
                        try {
                            c({}, 'a', {
                                value: 1,
                            })
                        } catch (t) {
                            c = null
                        }
                    e.exports = function (t) {
                        var e = a(o, i, arguments)
                        return (
                            p &&
                                c &&
                                p(e, 'length').configurable &&
                                c(e, 'length', {
                                    value:
                                        1 +
                                        u(0, t.length - (arguments.length - 1)),
                                }),
                            e
                        )
                    }
                    t = function () {
                        return a(o, n, arguments)
                    }
                    c
                        ? c(e.exports, 'apply', {
                              value: t,
                          })
                        : (e.exports.apply = t)
                },
                {
                    'function-bind': 10,
                    'get-intrinsic': 11,
                },
            ],
            9: [
                function (t, e, r) {
                    'use strict'
                    var c = Array.prototype.slice,
                        u = Object.prototype.toString
                    e.exports = function (e) {
                        var r = this
                        if (
                            'function' != typeof r ||
                            '[object Function]' !== u.call(r)
                        )
                            throw new TypeError(
                                'Function.prototype.bind called on incompatible ' +
                                    r
                            )
                        for (
                            var o,
                                t,
                                n = c.call(arguments, 1),
                                i = Math.max(0, r.length - n.length),
                                a = [],
                                p = 0;
                            p < i;
                            p++
                        )
                            a.push('$' + p)
                        return (
                            (o = Function(
                                'binder',
                                'return function (' +
                                    a.join(',') +
                                    '){ return binder.apply(this,arguments); }'
                            )(function () {
                                if (this instanceof o) {
                                    var t = r.apply(
                                        this,
                                        n.concat(c.call(arguments))
                                    )
                                    return Object(t) === t ? t : this
                                }
                                return r.apply(e, n.concat(c.call(arguments)))
                            })),
                            r.prototype &&
                                (((t = function () {}).prototype = r.prototype),
                                (o.prototype = new t()),
                                (t.prototype = null)),
                            o
                        )
                    }
                },
                {},
            ],
            10: [
                function (t, e, r) {
                    'use strict'
                    t = t('./implementation')
                    e.exports = Function.prototype.bind || t
                },
                {
                    './implementation': 9,
                },
            ],
            11: [
                function (t, e, r) {
                    'use strict'

                    function o(t) {
                        try {
                            return n(
                                '"use strict"; return (' + t + ').constructor;'
                            )()
                        } catch (t) {}
                    }
                    var s = SyntaxError,
                        n = Function,
                        d = TypeError,
                        g = Object.getOwnPropertyDescriptor
                    if (g)
                        try {
                            g({}, '')
                        } catch (t) {
                            g = null
                        }

                    function i() {
                        throw new d()
                    }

                    function b(t) {
                        var e, r
                        return (
                            '%AsyncFunction%' === t
                                ? (e = o('async function () {}'))
                                : '%GeneratorFunction%' === t
                                ? (e = o('function* () {}'))
                                : '%AsyncGeneratorFunction%' === t
                                ? (e = o('async function* () {}'))
                                : '%AsyncGenerator%' === t
                                ? (r = b('%AsyncGeneratorFunction%')) &&
                                  (e = r.prototype)
                                : '%AsyncIteratorPrototype%' !== t ||
                                  ((r = b('%AsyncGenerator%')) &&
                                      (e = c(r.prototype))),
                            (m[t] = e)
                        )
                    }
                    var a = g
                            ? (function () {
                                  try {
                                      return i
                                  } catch (t) {
                                      try {
                                          return g(arguments, 'callee').get
                                      } catch (t) {
                                          return i
                                      }
                                  }
                              })()
                            : i,
                        p = t('has-symbols')(),
                        c =
                            Object.getPrototypeOf ||
                            function (t) {
                                return t.__proto__
                            },
                        h = {},
                        u =
                            'undefined' == typeof Uint8Array
                                ? f
                                : c(Uint8Array),
                        m = {
                            '%AggregateError%':
                                'undefined' == typeof AggregateError
                                    ? f
                                    : AggregateError,
                            '%Array%': Array,
                            '%ArrayBuffer%':
                                'undefined' == typeof ArrayBuffer
                                    ? f
                                    : ArrayBuffer,
                            '%ArrayIteratorPrototype%': p
                                ? c([][Symbol.iterator]())
                                : f,
                            '%AsyncFromSyncIteratorPrototype%': f,
                            '%AsyncFunction%': h,
                            '%AsyncGenerator%': h,
                            '%AsyncGeneratorFunction%': h,
                            '%AsyncIteratorPrototype%': h,
                            '%Atomics%':
                                'undefined' == typeof Atomics ? f : Atomics,
                            '%BigInt%':
                                'undefined' == typeof BigInt ? f : BigInt,
                            '%Boolean%': Boolean,
                            '%DataView%':
                                'undefined' == typeof DataView ? f : DataView,
                            '%Date%': Date,
                            '%decodeURI%': decodeURI,
                            '%decodeURIComponent%': decodeURIComponent,
                            '%encodeURI%': encodeURI,
                            '%encodeURIComponent%': encodeURIComponent,
                            '%Error%': Error,
                            '%eval%': eval,
                            '%EvalError%': EvalError,
                            '%Float32Array%':
                                'undefined' == typeof Float32Array
                                    ? f
                                    : Float32Array,
                            '%Float64Array%':
                                'undefined' == typeof Float64Array
                                    ? f
                                    : Float64Array,
                            '%FinalizationRegistry%':
                                'undefined' == typeof FinalizationRegistry
                                    ? f
                                    : FinalizationRegistry,
                            '%Function%': n,
                            '%GeneratorFunction%': h,
                            '%Int8Array%':
                                'undefined' == typeof Int8Array ? f : Int8Array,
                            '%Int16Array%':
                                'undefined' == typeof Int16Array
                                    ? f
                                    : Int16Array,
                            '%Int32Array%':
                                'undefined' == typeof Int32Array
                                    ? f
                                    : Int32Array,
                            '%isFinite%': isFinite,
                            '%isNaN%': isNaN,
                            '%IteratorPrototype%': p
                                ? c(c([][Symbol.iterator]()))
                                : f,
                            '%JSON%': 'object' == typeof JSON ? JSON : f,
                            '%Map%': 'undefined' == typeof Map ? f : Map,
                            '%MapIteratorPrototype%':
                                'undefined' != typeof Map && p
                                    ? c(new Map()[Symbol.iterator]())
                                    : f,
                            '%Math%': Math,
                            '%Number%': Number,
                            '%Object%': Object,
                            '%parseFloat%': parseFloat,
                            '%parseInt%': parseInt,
                            '%Promise%':
                                'undefined' == typeof Promise ? f : Promise,
                            '%Proxy%': 'undefined' == typeof Proxy ? f : Proxy,
                            '%RangeError%': RangeError,
                            '%ReferenceError%': ReferenceError,
                            '%Reflect%':
                                'undefined' == typeof Reflect ? f : Reflect,
                            '%RegExp%': RegExp,
                            '%Set%': 'undefined' == typeof Set ? f : Set,
                            '%SetIteratorPrototype%':
                                'undefined' != typeof Set && p
                                    ? c(new Set()[Symbol.iterator]())
                                    : f,
                            '%SharedArrayBuffer%':
                                'undefined' == typeof SharedArrayBuffer
                                    ? f
                                    : SharedArrayBuffer,
                            '%String%': String,
                            '%StringIteratorPrototype%': p
                                ? c(''[Symbol.iterator]())
                                : f,
                            '%Symbol%': p ? Symbol : f,
                            '%SyntaxError%': s,
                            '%ThrowTypeError%': a,
                            '%TypedArray%': u,
                            '%TypeError%': d,
                            '%Uint8Array%':
                                'undefined' == typeof Uint8Array
                                    ? f
                                    : Uint8Array,
                            '%Uint8ClampedArray%':
                                'undefined' == typeof Uint8ClampedArray
                                    ? f
                                    : Uint8ClampedArray,
                            '%Uint16Array%':
                                'undefined' == typeof Uint16Array
                                    ? f
                                    : Uint16Array,
                            '%Uint32Array%':
                                'undefined' == typeof Uint32Array
                                    ? f
                                    : Uint32Array,
                            '%URIError%': URIError,
                            '%WeakMap%':
                                'undefined' == typeof WeakMap ? f : WeakMap,
                            '%WeakRef%':
                                'undefined' == typeof WeakRef ? f : WeakRef,
                            '%WeakSet%':
                                'undefined' == typeof WeakSet ? f : WeakSet,
                        },
                        v = {
                            '%ArrayBufferPrototype%': [
                                'ArrayBuffer',
                                'prototype',
                            ],
                            '%ArrayPrototype%': ['Array', 'prototype'],
                            '%ArrayProto_entries%': [
                                'Array',
                                'prototype',
                                'entries',
                            ],
                            '%ArrayProto_forEach%': [
                                'Array',
                                'prototype',
                                'forEach',
                            ],
                            '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
                            '%ArrayProto_values%': [
                                'Array',
                                'prototype',
                                'values',
                            ],
                            '%AsyncFunctionPrototype%': [
                                'AsyncFunction',
                                'prototype',
                            ],
                            '%AsyncGenerator%': [
                                'AsyncGeneratorFunction',
                                'prototype',
                            ],
                            '%AsyncGeneratorPrototype%': [
                                'AsyncGeneratorFunction',
                                'prototype',
                                'prototype',
                            ],
                            '%BooleanPrototype%': ['Boolean', 'prototype'],
                            '%DataViewPrototype%': ['DataView', 'prototype'],
                            '%DatePrototype%': ['Date', 'prototype'],
                            '%ErrorPrototype%': ['Error', 'prototype'],
                            '%EvalErrorPrototype%': ['EvalError', 'prototype'],
                            '%Float32ArrayPrototype%': [
                                'Float32Array',
                                'prototype',
                            ],
                            '%Float64ArrayPrototype%': [
                                'Float64Array',
                                'prototype',
                            ],
                            '%FunctionPrototype%': ['Function', 'prototype'],
                            '%Generator%': ['GeneratorFunction', 'prototype'],
                            '%GeneratorPrototype%': [
                                'GeneratorFunction',
                                'prototype',
                                'prototype',
                            ],
                            '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
                            '%Int16ArrayPrototype%': [
                                'Int16Array',
                                'prototype',
                            ],
                            '%Int32ArrayPrototype%': [
                                'Int32Array',
                                'prototype',
                            ],
                            '%JSONParse%': ['JSON', 'parse'],
                            '%JSONStringify%': ['JSON', 'stringify'],
                            '%MapPrototype%': ['Map', 'prototype'],
                            '%NumberPrototype%': ['Number', 'prototype'],
                            '%ObjectPrototype%': ['Object', 'prototype'],
                            '%ObjProto_toString%': [
                                'Object',
                                'prototype',
                                'toString',
                            ],
                            '%ObjProto_valueOf%': [
                                'Object',
                                'prototype',
                                'valueOf',
                            ],
                            '%PromisePrototype%': ['Promise', 'prototype'],
                            '%PromiseProto_then%': [
                                'Promise',
                                'prototype',
                                'then',
                            ],
                            '%Promise_all%': ['Promise', 'all'],
                            '%Promise_reject%': ['Promise', 'reject'],
                            '%Promise_resolve%': ['Promise', 'resolve'],
                            '%RangeErrorPrototype%': [
                                'RangeError',
                                'prototype',
                            ],
                            '%ReferenceErrorPrototype%': [
                                'ReferenceError',
                                'prototype',
                            ],
                            '%RegExpPrototype%': ['RegExp', 'prototype'],
                            '%SetPrototype%': ['Set', 'prototype'],
                            '%SharedArrayBufferPrototype%': [
                                'SharedArrayBuffer',
                                'prototype',
                            ],
                            '%StringPrototype%': ['String', 'prototype'],
                            '%SymbolPrototype%': ['Symbol', 'prototype'],
                            '%SyntaxErrorPrototype%': [
                                'SyntaxError',
                                'prototype',
                            ],
                            '%TypedArrayPrototype%': [
                                'TypedArray',
                                'prototype',
                            ],
                            '%TypeErrorPrototype%': ['TypeError', 'prototype'],
                            '%Uint8ArrayPrototype%': [
                                'Uint8Array',
                                'prototype',
                            ],
                            '%Uint8ClampedArrayPrototype%': [
                                'Uint8ClampedArray',
                                'prototype',
                            ],
                            '%Uint16ArrayPrototype%': [
                                'Uint16Array',
                                'prototype',
                            ],
                            '%Uint32ArrayPrototype%': [
                                'Uint32Array',
                                'prototype',
                            ],
                            '%URIErrorPrototype%': ['URIError', 'prototype'],
                            '%WeakMapPrototype%': ['WeakMap', 'prototype'],
                            '%WeakSetPrototype%': ['WeakSet', 'prototype'],
                        },
                        f = t('function-bind'),
                        S = t('has'),
                        A = f.call(Function.call, Array.prototype.concat),
                        j = f.call(Function.apply, Array.prototype.splice),
                        O = f.call(Function.call, String.prototype.replace),
                        w = f.call(Function.call, String.prototype.slice),
                        P =
                            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                        x = /\\(\\)?/g
                    e.exports = function (t, e) {
                        if ('string' != typeof t || 0 === t.length)
                            throw new d(
                                'intrinsic name must be a non-empty string'
                            )
                        if (1 < arguments.length && 'boolean' != typeof e)
                            throw new d(
                                '"allowMissing" argument must be a boolean'
                            )
                        var r = (function (t) {
                                var e = w(t, 0, 1),
                                    r = w(t, -1)
                                if ('%' === e && '%' !== r)
                                    throw new s(
                                        'invalid intrinsic syntax, expected closing `%`'
                                    )
                                if ('%' === r && '%' !== e)
                                    throw new s(
                                        'invalid intrinsic syntax, expected opening `%`'
                                    )
                                var n = []
                                return (
                                    O(t, P, function (t, e, r, o) {
                                        n[n.length] = r ? O(o, x, '$1') : e || t
                                    }),
                                    n
                                )
                            })(t),
                            o = 0 < r.length ? r[0] : '',
                            n = (function (t, e) {
                                var r,
                                    o = t
                                if (
                                    (S(v, o) && (o = '%' + (r = v[o])[0] + '%'),
                                    S(m, o))
                                ) {
                                    var n = m[o]
                                    if (
                                        (n === h && (n = b(o)),
                                        void 0 === n && !e)
                                    )
                                        throw new d(
                                            'intrinsic ' +
                                                t +
                                                ' exists, but is not available. Please file an issue!'
                                        )
                                    return {
                                        alias: r,
                                        name: o,
                                        value: n,
                                    }
                                }
                                throw new s(
                                    'intrinsic ' + t + ' does not exist!'
                                )
                            })('%' + o + '%', e),
                            i = n.name,
                            a = n.value,
                            p = !1,
                            n = n.alias
                        n && ((o = n[0]), j(r, A([0, 1], n)))
                        for (var c = 1, u = !0; c < r.length; c += 1) {
                            var f = r[c],
                                l = w(f, 0, 1),
                                y = w(f, -1)
                            if (
                                ('"' === l ||
                                    "'" === l ||
                                    '`' === l ||
                                    '"' === y ||
                                    "'" === y ||
                                    '`' === y) &&
                                l !== y
                            )
                                throw new s(
                                    'property names with quotes must have matching quotes'
                                )
                            if (
                                (('constructor' !== f && u) || (p = !0),
                                S(m, (i = '%' + (o += '.' + f) + '%')))
                            )
                                a = m[i]
                            else if (null != a) {
                                if (!(f in a)) {
                                    if (!e)
                                        throw new d(
                                            'base intrinsic for ' +
                                                t +
                                                ' exists, but the property is not available.'
                                        )
                                    return
                                }
                                ;(a =
                                    g && c + 1 >= r.length
                                        ? (u = !!(y = g(a, f))) &&
                                          'get' in y &&
                                          !('originalValue' in y.get)
                                            ? y.get
                                            : a[f]
                                        : ((u = S(a, f)), a[f])),
                                    u && !p && (m[i] = a)
                            }
                        }
                        return a
                    }
                },
                {
                    'function-bind': 10,
                    has: 14,
                    'has-symbols': 12,
                },
            ],
            12: [
                function (t, e, r) {
                    'use strict'
                    var o = 'undefined' != typeof Symbol && Symbol,
                        n = t('./shams')
                    e.exports = function () {
                        return (
                            'function' == typeof o &&
                            'function' == typeof Symbol &&
                            'symbol' == typeof o('foo') &&
                            'symbol' == typeof Symbol('bar') &&
                            n()
                        )
                    }
                },
                {
                    './shams': 13,
                },
            ],
            13: [
                function (t, e, r) {
                    'use strict'
                    e.exports = function () {
                        if (
                            'function' != typeof Symbol ||
                            'function' != typeof Object.getOwnPropertySymbols
                        )
                            return !1
                        if ('symbol' == typeof Symbol.iterator) return !0
                        var t = {},
                            e = Symbol('test'),
                            r = Object(e)
                        if ('string' == typeof e) return !1
                        if (
                            '[object Symbol]' !==
                            Object.prototype.toString.call(e)
                        )
                            return !1
                        if (
                            '[object Symbol]' !==
                            Object.prototype.toString.call(r)
                        )
                            return !1
                        for (e in ((t[e] = 42), t)) return !1
                        if (
                            'function' == typeof Object.keys &&
                            0 !== Object.keys(t).length
                        )
                            return !1
                        if (
                            'function' == typeof Object.getOwnPropertyNames &&
                            0 !== Object.getOwnPropertyNames(t).length
                        )
                            return !1
                        r = Object.getOwnPropertySymbols(t)
                        if (1 !== r.length || r[0] !== e) return !1
                        if (!Object.prototype.propertyIsEnumerable.call(t, e))
                            return !1
                        if (
                            'function' == typeof Object.getOwnPropertyDescriptor
                        ) {
                            t = Object.getOwnPropertyDescriptor(t, e)
                            if (42 !== t.value || !0 !== t.enumerable) return !1
                        }
                        return !0
                    }
                },
                {},
            ],
            14: [
                function (t, e, r) {
                    'use strict'
                    t = t('function-bind')
                    e.exports = t.call(
                        Function.call,
                        Object.prototype.hasOwnProperty
                    )
                },
                {
                    'function-bind': 10,
                },
            ],
            15: [
                function (t, e, r) {
                    var o = 'function' == typeof Map && Map.prototype,
                        n =
                            Object.getOwnPropertyDescriptor && o
                                ? Object.getOwnPropertyDescriptor(
                                      Map.prototype,
                                      'size'
                                  )
                                : null,
                        h = o && n && 'function' == typeof n.get ? n.get : null,
                        m = o && Map.prototype.forEach,
                        n = 'function' == typeof Set && Set.prototype,
                        o =
                            Object.getOwnPropertyDescriptor && n
                                ? Object.getOwnPropertyDescriptor(
                                      Set.prototype,
                                      'size'
                                  )
                                : null,
                        v = n && o && 'function' == typeof o.get ? o.get : null,
                        S = n && Set.prototype.forEach,
                        A =
                            'function' == typeof WeakMap && WeakMap.prototype
                                ? WeakMap.prototype.has
                                : null,
                        j =
                            'function' == typeof WeakSet && WeakSet.prototype
                                ? WeakSet.prototype.has
                                : null,
                        O = Boolean.prototype.valueOf,
                        i = Object.prototype.toString,
                        w = Function.prototype.toString,
                        P = String.prototype.match,
                        x =
                            'function' == typeof BigInt
                                ? BigInt.prototype.valueOf
                                : null,
                        c = Object.getOwnPropertySymbols,
                        E =
                            'function' == typeof Symbol
                                ? Symbol.prototype.toString
                                : null,
                        u = Object.prototype.propertyIsEnumerable,
                        t = t('./util.inspect').custom,
                        F = t && N(t) ? t : null

                    function I(t, e, r) {
                        e = 'double' === (r.quoteStyle || e) ? '"' : "'"
                        return e + t + e
                    }

                    function k(t) {
                        return '[object Array]' === M(t)
                    }

                    function N(t) {
                        return '[object Symbol]' === M(t)
                    }
                    e.exports = function o(r, t, n, i) {
                        var a = t || {}
                        if (
                            R(a, 'quoteStyle') &&
                            'single' !== a.quoteStyle &&
                            'double' !== a.quoteStyle
                        )
                            throw new TypeError(
                                'option "quoteStyle" must be "single" or "double"'
                            )
                        if (
                            R(a, 'maxStringLength') &&
                            ('number' == typeof a.maxStringLength
                                ? a.maxStringLength < 0 &&
                                  a.maxStringLength !== 1 / 0
                                : null !== a.maxStringLength)
                        )
                            throw new TypeError(
                                'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
                            )
                        var e = !R(a, 'customInspect') || a.customInspect
                        if ('boolean' != typeof e)
                            throw new TypeError(
                                'option "customInspect", if provided, must be `true` or `false`'
                            )
                        if (
                            R(a, 'indent') &&
                            null !== a.indent &&
                            '\t' !== a.indent &&
                            !(
                                parseInt(a.indent, 10) === a.indent &&
                                0 < a.indent
                            )
                        )
                            throw new TypeError(
                                'options "indent" must be "\\t", an integer > 0, or `null`'
                            )
                        if (void 0 === r) return 'undefined'
                        if (null === r) return 'null'
                        if ('boolean' == typeof r) return r ? 'true' : 'false'
                        if ('string' == typeof r)
                            return (function t(e, r) {
                                if (e.length > r.maxStringLength) {
                                    var o = e.length - r.maxStringLength,
                                        o =
                                            '... ' +
                                            o +
                                            ' more character' +
                                            (1 < o ? 's' : '')
                                    return (
                                        t(e.slice(0, r.maxStringLength), r) + o
                                    )
                                }
                                var e = e
                                    .replace(/(['\\])/g, '\\$1')
                                    .replace(/[\x00-\x1f]/g, U)
                                return I(e, 'single', r)
                            })(r, a)
                        if ('number' == typeof r)
                            return 0 === r
                                ? 0 < 1 / 0 / r
                                    ? '0'
                                    : '-0'
                                : String(r)
                        if ('bigint' == typeof r) return String(r) + 'n'
                        var p = void 0 === a.depth ? 5 : a.depth
                        if (
                            (void 0 === n && (n = 0),
                            p <= n && 0 < p && 'object' == typeof r)
                        )
                            return k(r) ? '[Array]' : '[Object]'
                        var c,
                            t = (function (t, e) {
                                var r
                                if ('\t' === t.indent) r = '\t'
                                else {
                                    if (
                                        !(
                                            'number' == typeof t.indent &&
                                            0 < t.indent
                                        )
                                    )
                                        return null
                                    r = Array(t.indent + 1).join(' ')
                                }
                                return {
                                    base: r,
                                    prev: Array(e + 1).join(r),
                                }
                            })(a, n)
                        if (void 0 === i) i = []
                        else if (0 <= D(i, r)) return '[Circular]'

                        function u(t, e, r) {
                            if ((e && (i = i.slice()).push(e), r)) {
                                r = {
                                    depth: a.depth,
                                }
                                return (
                                    R(a, 'quoteStyle') &&
                                        (r.quoteStyle = a.quoteStyle),
                                    o(t, r, n + 1, i)
                                )
                            }
                            return o(t, a, n + 1, i)
                        }
                        if ('function' == typeof r) {
                            var p = (function (t) {
                                    if (t.name) return t.name
                                    t = P.call(
                                        w.call(t),
                                        /^function\s*([\w$]+)/
                                    )
                                    if (t) return t[1]
                                    return null
                                })(r),
                                f = L(r, u)
                            return (
                                '[Function' +
                                (p ? ': ' + p : ' (anonymous)') +
                                ']' +
                                (0 < f.length
                                    ? ' { ' + f.join(', ') + ' }'
                                    : '')
                            )
                        }
                        if (N(r)) {
                            f = E.call(r)
                            return 'object' == typeof r ? B(f) : f
                        }
                        if (
                            (function (t) {
                                if (!t || 'object' != typeof t) return !1
                                if (
                                    'undefined' != typeof HTMLElement &&
                                    t instanceof HTMLElement
                                )
                                    return !0
                                return (
                                    'string' == typeof t.nodeName &&
                                    'function' == typeof t.getAttribute
                                )
                            })(r)
                        ) {
                            for (
                                var l = '<' + String(r.nodeName).toLowerCase(),
                                    y = r.attributes || [],
                                    s = 0;
                                s < y.length;
                                s++
                            )
                                l +=
                                    ' ' +
                                    y[s].name +
                                    '=' +
                                    I(
                                        ((c = y[s].value),
                                        String(c).replace(/"/g, '&quot;')),
                                        'double',
                                        a
                                    )
                            return (
                                (l += '>'),
                                r.childNodes &&
                                    r.childNodes.length &&
                                    (l += '...'),
                                (l +=
                                    '</' +
                                    String(r.nodeName).toLowerCase() +
                                    '>')
                            )
                        }
                        if (k(r)) {
                            if (0 === r.length) return '[]'
                            var d = L(r, u)
                            return t &&
                                !(function (t) {
                                    for (var e = 0; e < t.length; e++)
                                        if (0 <= D(t[e], '\n')) return !1
                                    return !0
                                })(d)
                                ? '[' + T(d, t) + ']'
                                : '[ ' + d.join(', ') + ' ]'
                        }
                        if ('[object Error]' === M(r)) {
                            d = L(r, u)
                            return 0 === d.length
                                ? '[' + String(r) + ']'
                                : '{ [' + String(r) + '] ' + d.join(', ') + ' }'
                        }
                        if ('object' == typeof r && e) {
                            if (F && 'function' == typeof r[F]) return r[F]()
                            if ('function' == typeof r.inspect)
                                return r.inspect()
                        }
                        if (
                            (function (t) {
                                if (!h || !t || 'object' != typeof t) return !1
                                try {
                                    h.call(t)
                                    try {
                                        v.call(t)
                                    } catch (t) {
                                        return !0
                                    }
                                    return t instanceof Map
                                } catch (t) {}
                                return !1
                            })(r)
                        ) {
                            var g = []
                            return (
                                m.call(r, function (t, e) {
                                    g.push(u(e, r, !0) + ' => ' + u(t, r))
                                }),
                                W('Map', h.call(r), g, t)
                            )
                        }
                        if (
                            (function (t) {
                                if (!v || !t || 'object' != typeof t) return !1
                                try {
                                    v.call(t)
                                    try {
                                        h.call(t)
                                    } catch (t) {
                                        return !0
                                    }
                                    return t instanceof Set
                                } catch (t) {}
                                return !1
                            })(r)
                        ) {
                            var b = []
                            return (
                                S.call(r, function (t) {
                                    b.push(u(t, r))
                                }),
                                W('Set', v.call(r), b, t)
                            )
                        }
                        if (
                            (function (t) {
                                if (!A || !t || 'object' != typeof t) return !1
                                try {
                                    A.call(t, A)
                                    try {
                                        j.call(t, j)
                                    } catch (t) {
                                        return !0
                                    }
                                    return t instanceof WeakMap
                                } catch (t) {}
                                return !1
                            })(r)
                        )
                            return C('WeakMap')
                        if (
                            (function (t) {
                                if (!j || !t || 'object' != typeof t) return !1
                                try {
                                    j.call(t, j)
                                    try {
                                        A.call(t, A)
                                    } catch (t) {
                                        return !0
                                    }
                                    return t instanceof WeakSet
                                } catch (t) {}
                                return !1
                            })(r)
                        )
                            return C('WeakSet')
                        if ('[object Number]' === M(r)) return B(u(Number(r)))
                        if ('[object BigInt]' === M(r)) return B(u(x.call(r)))
                        if ('[object Boolean]' === M(r)) return B(O.call(r))
                        if ('[object String]' === M(r)) return B(u(String(r)))
                        if (
                            '[object Date]' === M(r) ||
                            '[object RegExp]' === M(r)
                        )
                            return String(r)
                        e = L(r, u)
                        return 0 === e.length
                            ? '{}'
                            : t
                            ? '{' + T(e, t) + '}'
                            : '{ ' + e.join(', ') + ' }'
                    }
                    var a =
                        Object.prototype.hasOwnProperty ||
                        function (t) {
                            return t in this
                        }

                    function R(t, e) {
                        return a.call(t, e)
                    }

                    function M(t) {
                        return i.call(t)
                    }

                    function D(t, e) {
                        if (t.indexOf) return t.indexOf(e)
                        for (var r = 0, o = t.length; r < o; r++)
                            if (t[r] === e) return r
                        return -1
                    }

                    function U(t) {
                        var e = t.charCodeAt(0),
                            t = {
                                8: 'b',
                                9: 't',
                                10: 'n',
                                12: 'f',
                                13: 'r',
                            }[e]
                        return t
                            ? '\\' + t
                            : '\\x' +
                                  (e < 16 ? '0' : '') +
                                  e.toString(16).toUpperCase()
                    }

                    function B(t) {
                        return 'Object(' + t + ')'
                    }

                    function C(t) {
                        return t + ' { ? }'
                    }

                    function W(t, e, r, o) {
                        return (
                            t +
                            ' (' +
                            e +
                            ') {' +
                            (o ? T(r, o) : r.join(', ')) +
                            '}'
                        )
                    }

                    function T(t, e) {
                        if (0 === t.length) return ''
                        var r = '\n' + e.prev + e.base
                        return r + t.join(',' + r) + '\n' + e.prev
                    }

                    function L(t, e) {
                        var r,
                            o = k(t),
                            n = []
                        if (o) {
                            n.length = t.length
                            for (var i = 0; i < t.length; i++)
                                n[i] = R(t, i) ? e(t[i], t) : ''
                        }
                        for (r in t)
                            R(t, r) &&
                                ((o &&
                                    String(Number(r)) === r &&
                                    r < t.length) ||
                                    (/[^\w$]/.test(r)
                                        ? n.push(e(r, t) + ': ' + e(t[r], t))
                                        : n.push(r + ': ' + e(t[r], t))))
                        if ('function' == typeof c)
                            for (var a = c(t), p = 0; p < a.length; p++)
                                u.call(t, a[p]) &&
                                    n.push(
                                        '[' + e(a[p]) + ']: ' + e(t[a[p]], t)
                                    )
                        return n
                    }
                },
                {
                    './util.inspect': 6,
                },
            ],
            16: [
                function (t, e, r) {
                    'use strict'

                    function p(t, e) {
                        for (var r, o = t; null !== (r = o.next); o = r)
                            if (r.key === e)
                                return (
                                    (o.next = r.next),
                                    (r.next = t.next),
                                    (t.next = r)
                                )
                    }
                    var o = t('get-intrinsic'),
                        n = t('call-bind/callBound'),
                        c = t('object-inspect'),
                        u = o('%TypeError%'),
                        f = o('%WeakMap%', !0),
                        l = o('%Map%', !0),
                        y = n('WeakMap.prototype.get', !0),
                        s = n('WeakMap.prototype.set', !0),
                        d = n('WeakMap.prototype.has', !0),
                        g = n('Map.prototype.get', !0),
                        b = n('Map.prototype.set', !0),
                        h = n('Map.prototype.has', !0)
                    e.exports = function () {
                        var n,
                            i,
                            a,
                            e = {
                                assert: function (t) {
                                    if (!e.has(t))
                                        throw new u(
                                            'Side channel does not contain ' +
                                                c(t)
                                        )
                                },
                                get: function (t) {
                                    if (
                                        f &&
                                        t &&
                                        ('object' == typeof t ||
                                            'function' == typeof t)
                                    ) {
                                        if (n) return y(n, t)
                                    } else if (l) {
                                        if (i) return g(i, t)
                                    } else if (a)
                                        return (function (t, e) {
                                            e = p(t, e)
                                            return e && e.value
                                        })(a, t)
                                },
                                has: function (t) {
                                    if (
                                        f &&
                                        t &&
                                        ('object' == typeof t ||
                                            'function' == typeof t)
                                    ) {
                                        if (n) return d(n, t)
                                    } else if (l) {
                                        if (i) return h(i, t)
                                    } else if (a) return !!p(a, t)
                                    return !1
                                },
                                set: function (t, e) {
                                    var r, o
                                    f &&
                                    t &&
                                    ('object' == typeof t ||
                                        'function' == typeof t)
                                        ? ((n = n || new f()), s(n, t, e))
                                        : l
                                        ? ((i = i || new l()), b(i, t, e))
                                        : ((o = e),
                                          (t = p(
                                              (r = a =
                                                  a || {
                                                      key: {},
                                                      next: null,
                                                  }),
                                              (e = t)
                                          ))
                                              ? (t.value = o)
                                              : (r.next = {
                                                    key: e,
                                                    next: r.next,
                                                    value: o,
                                                }))
                                },
                            }
                        return e
                    }
                },
                {
                    'call-bind/callBound': 7,
                    'get-intrinsic': 11,
                    'object-inspect': 15,
                },
            ],
        },
        {},
        [2]
    )(2)
})
