package ge;

import android.text.Layout;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.ArrayDeque;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import ne.w0;
import ne.y;
import ne.y0;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
import org.xmlpull.v1.XmlPullParserFactory;
import zd.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends zd.f {

    /* renamed from: p  reason: collision with root package name */
    private static final Pattern f26662p = Pattern.compile("^([0-9][0-9]+):([0-9][0-9]):([0-9][0-9])(?:(\\.[0-9]+)|:([0-9][0-9])(?:\\.([0-9]+))?)?$");

    /* renamed from: q  reason: collision with root package name */
    private static final Pattern f26663q = Pattern.compile("^([0-9]+(?:\\.[0-9]+)?)(h|m|s|ms|f|t)$");

    /* renamed from: r  reason: collision with root package name */
    private static final Pattern f26664r = Pattern.compile("^(([0-9]*.)?[0-9]+)(px|em|%)$");

    /* renamed from: s  reason: collision with root package name */
    static final Pattern f26665s = Pattern.compile("^([-+]?\\d+\\.?\\d*?)%$");

    /* renamed from: t  reason: collision with root package name */
    static final Pattern f26666t = Pattern.compile("^(\\d+\\.?\\d*?)% (\\d+\\.?\\d*?)%$");

    /* renamed from: u  reason: collision with root package name */
    private static final Pattern f26667u = Pattern.compile("^(\\d+\\.?\\d*?)px (\\d+\\.?\\d*?)px$");

    /* renamed from: v  reason: collision with root package name */
    private static final Pattern f26668v = Pattern.compile("^(\\d+) (\\d+)$");

    /* renamed from: w  reason: collision with root package name */
    private static final b f26669w = new b(30.0f, 1, 1);

    /* renamed from: x  reason: collision with root package name */
    private static final a f26670x = new a(32, 15);

    /* renamed from: o  reason: collision with root package name */
    private final XmlPullParserFactory f26671o;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        final int f26672a;

        /* renamed from: b  reason: collision with root package name */
        final int f26673b;

        a(int i10, int i11) {
            this.f26672a = i10;
            this.f26673b = i11;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final float f26674a;

        /* renamed from: b  reason: collision with root package name */
        final int f26675b;

        /* renamed from: c  reason: collision with root package name */
        final int f26676c;

        b(float f10, int i10, int i11) {
            this.f26674a = f10;
            this.f26675b = i10;
            this.f26676c = i11;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: ge.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0339c {

        /* renamed from: a  reason: collision with root package name */
        final int f26677a;

        /* renamed from: b  reason: collision with root package name */
        final int f26678b;

        C0339c(int i10, int i11) {
            this.f26677a = i10;
            this.f26678b = i11;
        }
    }

    public c() {
        super("TtmlDecoder");
        try {
            XmlPullParserFactory newInstance = XmlPullParserFactory.newInstance();
            this.f26671o = newInstance;
            newInstance.setNamespaceAware(true);
        } catch (XmlPullParserException e10) {
            throw new RuntimeException("Couldn't create XmlPullParserFactory instance", e10);
        }
    }

    private static g B(g gVar) {
        if (gVar == null) {
            return new g();
        }
        return gVar;
    }

    private static boolean C(String str) {
        if (!str.equals("tt") && !str.equals("head") && !str.equals("body") && !str.equals("div") && !str.equals("p") && !str.equals("span") && !str.equals("br") && !str.equals("style") && !str.equals("styling") && !str.equals("layout") && !str.equals("region") && !str.equals("metadata") && !str.equals("image") && !str.equals("data") && !str.equals("information")) {
            return false;
        }
        return true;
    }

    private static Layout.Alignment D(String str) {
        String e10 = ii.b.e(str);
        e10.getClass();
        char c10 = 65535;
        switch (e10.hashCode()) {
            case -1364013995:
                if (e10.equals("center")) {
                    c10 = 0;
                    break;
                }
                break;
            case 100571:
                if (e10.equals(ViewProps.END)) {
                    c10 = 1;
                    break;
                }
                break;
            case 3317767:
                if (e10.equals(ViewProps.LEFT)) {
                    c10 = 2;
                    break;
                }
                break;
            case 108511772:
                if (e10.equals(ViewProps.RIGHT)) {
                    c10 = 3;
                    break;
                }
                break;
            case 109757538:
                if (e10.equals(ViewProps.START)) {
                    c10 = 4;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                return Layout.Alignment.ALIGN_CENTER;
            case 1:
            case 3:
                return Layout.Alignment.ALIGN_OPPOSITE;
            case 2:
            case 4:
                return Layout.Alignment.ALIGN_NORMAL;
            default:
                return null;
        }
    }

    private static a E(XmlPullParser xmlPullParser, a aVar) {
        String attributeValue = xmlPullParser.getAttributeValue("http://www.w3.org/ns/ttml#parameter", "cellResolution");
        if (attributeValue == null) {
            return aVar;
        }
        Matcher matcher = f26668v.matcher(attributeValue);
        if (!matcher.matches()) {
            y.i("TtmlDecoder", "Ignoring malformed cell resolution: " + attributeValue);
            return aVar;
        }
        try {
            int parseInt = Integer.parseInt((String) ne.a.e(matcher.group(1)));
            int parseInt2 = Integer.parseInt((String) ne.a.e(matcher.group(2)));
            if (parseInt != 0 && parseInt2 != 0) {
                return new a(parseInt, parseInt2);
            }
            throw new i("Invalid cell resolution " + parseInt + " " + parseInt2);
        } catch (NumberFormatException unused) {
            y.i("TtmlDecoder", "Ignoring malformed cell resolution: " + attributeValue);
            return aVar;
        }
    }

    private static void F(String str, g gVar) {
        Matcher matcher;
        String[] d12 = w0.d1(str, "\\s+");
        if (d12.length == 1) {
            matcher = f26664r.matcher(str);
        } else if (d12.length == 2) {
            matcher = f26664r.matcher(d12[1]);
            y.i("TtmlDecoder", "Multiple values in fontSize attribute. Picking the second value for vertical font size and ignoring the first.");
        } else {
            throw new i("Invalid number of entries for fontSize: " + d12.length + ".");
        }
        if (matcher.matches()) {
            String str2 = (String) ne.a.e(matcher.group(3));
            str2.getClass();
            char c10 = 65535;
            switch (str2.hashCode()) {
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                    if (str2.equals("%")) {
                        c10 = 0;
                        break;
                    }
                    break;
                case 3240:
                    if (str2.equals("em")) {
                        c10 = 1;
                        break;
                    }
                    break;
                case 3592:
                    if (str2.equals("px")) {
                        c10 = 2;
                        break;
                    }
                    break;
            }
            switch (c10) {
                case 0:
                    gVar.z(3);
                    break;
                case 1:
                    gVar.z(2);
                    break;
                case 2:
                    gVar.z(1);
                    break;
                default:
                    throw new i("Invalid unit for fontSize: '" + str2 + "'.");
            }
            gVar.y(Float.parseFloat((String) ne.a.e(matcher.group(1))));
            return;
        }
        throw new i("Invalid expression for fontSize: '" + str + "'.");
    }

    private static b G(XmlPullParser xmlPullParser) {
        int i10;
        float f10;
        String attributeValue = xmlPullParser.getAttributeValue("http://www.w3.org/ns/ttml#parameter", "frameRate");
        if (attributeValue != null) {
            i10 = Integer.parseInt(attributeValue);
        } else {
            i10 = 30;
        }
        String attributeValue2 = xmlPullParser.getAttributeValue("http://www.w3.org/ns/ttml#parameter", "frameRateMultiplier");
        if (attributeValue2 != null) {
            String[] d12 = w0.d1(attributeValue2, " ");
            if (d12.length == 2) {
                f10 = Integer.parseInt(d12[0]) / Integer.parseInt(d12[1]);
            } else {
                throw new i("frameRateMultiplier doesn't have 2 parts");
            }
        } else {
            f10 = 1.0f;
        }
        b bVar = f26669w;
        int i11 = bVar.f26675b;
        String attributeValue3 = xmlPullParser.getAttributeValue("http://www.w3.org/ns/ttml#parameter", "subFrameRate");
        if (attributeValue3 != null) {
            i11 = Integer.parseInt(attributeValue3);
        }
        int i12 = bVar.f26676c;
        String attributeValue4 = xmlPullParser.getAttributeValue("http://www.w3.org/ns/ttml#parameter", "tickRate");
        if (attributeValue4 != null) {
            i12 = Integer.parseInt(attributeValue4);
        }
        return new b(i10 * f10, i11, i12);
    }

    private static Map H(XmlPullParser xmlPullParser, Map map, a aVar, C0339c c0339c, Map map2, Map map3) {
        do {
            xmlPullParser.next();
            if (y0.f(xmlPullParser, "style")) {
                String a10 = y0.a(xmlPullParser, "style");
                g M = M(xmlPullParser, new g());
                if (a10 != null) {
                    for (String str : N(a10)) {
                        M.a((g) map.get(str));
                    }
                }
                String g10 = M.g();
                if (g10 != null) {
                    map.put(g10, M);
                }
            } else if (y0.f(xmlPullParser, "region")) {
                e K = K(xmlPullParser, aVar, c0339c);
                if (K != null) {
                    map2.put(K.f26692a, K);
                }
            } else if (y0.f(xmlPullParser, "metadata")) {
                I(xmlPullParser, map3);
            }
        } while (!y0.d(xmlPullParser, "head"));
        return map;
    }

    private static void I(XmlPullParser xmlPullParser, Map map) {
        String a10;
        do {
            xmlPullParser.next();
            if (y0.f(xmlPullParser, "image") && (a10 = y0.a(xmlPullParser, StackTraceHelper.ID_KEY)) != null) {
                map.put(a10, xmlPullParser.nextText());
            }
        } while (!y0.d(xmlPullParser, "metadata"));
    }

    private static d J(XmlPullParser xmlPullParser, d dVar, Map map, b bVar) {
        XmlPullParser xmlPullParser2 = xmlPullParser;
        int attributeCount = xmlPullParser2.getAttributeCount();
        String str = null;
        g M = M(xmlPullParser2, null);
        long j10 = -9223372036854775807L;
        long j11 = -9223372036854775807L;
        long j12 = -9223372036854775807L;
        String[] strArr = null;
        String str2 = "";
        int i10 = 0;
        while (i10 < attributeCount) {
            String attributeName = xmlPullParser2.getAttributeName(i10);
            int i11 = attributeCount;
            String attributeValue = xmlPullParser2.getAttributeValue(i10);
            attributeName.getClass();
            char c10 = 65535;
            switch (attributeName.hashCode()) {
                case -934795532:
                    if (attributeName.equals("region")) {
                        c10 = 0;
                        break;
                    }
                    break;
                case 99841:
                    if (attributeName.equals("dur")) {
                        c10 = 1;
                        break;
                    }
                    break;
                case 100571:
                    if (attributeName.equals(ViewProps.END)) {
                        c10 = 2;
                        break;
                    }
                    break;
                case 93616297:
                    if (attributeName.equals("begin")) {
                        c10 = 3;
                        break;
                    }
                    break;
                case 109780401:
                    if (attributeName.equals("style")) {
                        c10 = 4;
                        break;
                    }
                    break;
                case 1292595405:
                    if (attributeName.equals("backgroundImage")) {
                        c10 = 5;
                        break;
                    }
                    break;
            }
            switch (c10) {
                case 0:
                    if (map.containsKey(attributeValue)) {
                        str2 = attributeValue;
                        continue;
                    }
                    i10++;
                    xmlPullParser2 = xmlPullParser;
                    attributeCount = i11;
                case 1:
                    j12 = O(attributeValue, bVar);
                    break;
                case 2:
                    j11 = O(attributeValue, bVar);
                    break;
                case 3:
                    j10 = O(attributeValue, bVar);
                    break;
                case 4:
                    String[] N = N(attributeValue);
                    if (N.length > 0) {
                        strArr = N;
                        break;
                    }
                    break;
                case 5:
                    if (attributeValue.startsWith("#")) {
                        str = attributeValue.substring(1);
                        break;
                    }
                    break;
            }
            i10++;
            xmlPullParser2 = xmlPullParser;
            attributeCount = i11;
        }
        if (dVar != null) {
            long j13 = dVar.f26682d;
            if (j13 != -9223372036854775807L) {
                if (j10 != -9223372036854775807L) {
                    j10 += j13;
                }
                if (j11 != -9223372036854775807L) {
                    j11 += j13;
                }
            }
        }
        long j14 = j10;
        if (j11 == -9223372036854775807L) {
            if (j12 != -9223372036854775807L) {
                j11 = j14 + j12;
            } else if (dVar != null) {
                long j15 = dVar.f26683e;
                if (j15 != -9223372036854775807L) {
                    j11 = j15;
                }
            }
        }
        return d.c(xmlPullParser.getName(), j14, j11, M, strArr, str2, str, dVar);
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Code restructure failed: missing block: B:60:0x01aa, code lost:
        if (r0.equals("tb") == false) goto L41;
     */
    /* JADX WARN: Removed duplicated region for block: B:48:0x017d  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static ge.e K(org.xmlpull.v1.XmlPullParser r17, ge.c.a r18, ge.c.C0339c r19) {
        /*
            Method dump skipped, instructions count: 566
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ge.c.K(org.xmlpull.v1.XmlPullParser, ge.c$a, ge.c$c):ge.e");
    }

    private static float L(String str) {
        Matcher matcher = f26665s.matcher(str);
        if (!matcher.matches()) {
            y.i("TtmlDecoder", "Invalid value for shear: " + str);
            return Float.MAX_VALUE;
        }
        try {
            return Math.min(100.0f, Math.max(-100.0f, Float.parseFloat((String) ne.a.e(matcher.group(1)))));
        } catch (NumberFormatException e10) {
            y.j("TtmlDecoder", "Failed to parse shear: " + str, e10);
            return Float.MAX_VALUE;
        }
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Code restructure failed: missing block: B:102:0x01e0, code lost:
        if (r3.equals("text") == false) goto L49;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static ge.g M(org.xmlpull.v1.XmlPullParser r12, ge.g r13) {
        /*
            Method dump skipped, instructions count: 928
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ge.c.M(org.xmlpull.v1.XmlPullParser, ge.g):ge.g");
    }

    private static String[] N(String str) {
        String trim = str.trim();
        if (trim.isEmpty()) {
            return new String[0];
        }
        return w0.d1(trim, "\\s+");
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Code restructure failed: missing block: B:23:0x00bc, code lost:
        if (r13.equals("ms") == false) goto L21;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static long O(java.lang.String r13, ge.c.b r14) {
        /*
            Method dump skipped, instructions count: 326
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ge.c.O(java.lang.String, ge.c$b):long");
    }

    private static C0339c P(XmlPullParser xmlPullParser) {
        String a10 = y0.a(xmlPullParser, "extent");
        if (a10 == null) {
            return null;
        }
        Matcher matcher = f26667u.matcher(a10);
        if (!matcher.matches()) {
            y.i("TtmlDecoder", "Ignoring non-pixel tts extent: " + a10);
            return null;
        }
        try {
            return new C0339c(Integer.parseInt((String) ne.a.e(matcher.group(1))), Integer.parseInt((String) ne.a.e(matcher.group(2))));
        } catch (NumberFormatException unused) {
            y.i("TtmlDecoder", "Ignoring malformed tts extent: " + a10);
            return null;
        }
    }

    @Override // zd.f
    protected zd.g z(byte[] bArr, int i10, boolean z10) {
        try {
            XmlPullParser newPullParser = this.f26671o.newPullParser();
            HashMap hashMap = new HashMap();
            HashMap hashMap2 = new HashMap();
            HashMap hashMap3 = new HashMap();
            hashMap2.put("", new e(""));
            int i11 = 0;
            C0339c c0339c = null;
            newPullParser.setInput(new ByteArrayInputStream(bArr, 0, i10), null);
            ArrayDeque arrayDeque = new ArrayDeque();
            b bVar = f26669w;
            a aVar = f26670x;
            h hVar = null;
            for (int eventType = newPullParser.getEventType(); eventType != 1; eventType = newPullParser.getEventType()) {
                d dVar = (d) arrayDeque.peek();
                if (i11 == 0) {
                    String name = newPullParser.getName();
                    if (eventType == 2) {
                        if ("tt".equals(name)) {
                            bVar = G(newPullParser);
                            aVar = E(newPullParser, f26670x);
                            c0339c = P(newPullParser);
                        }
                        b bVar2 = bVar;
                        C0339c c0339c2 = c0339c;
                        a aVar2 = aVar;
                        if (!C(name)) {
                            y.f("TtmlDecoder", "Ignoring unsupported tag: " + newPullParser.getName());
                        } else {
                            if ("head".equals(name)) {
                                H(newPullParser, hashMap, aVar2, c0339c2, hashMap2, hashMap3);
                            } else {
                                try {
                                    d J = J(newPullParser, dVar, hashMap2, bVar2);
                                    arrayDeque.push(J);
                                    if (dVar != null) {
                                        dVar.a(J);
                                    }
                                } catch (i e10) {
                                    y.j("TtmlDecoder", "Suppressing parser error", e10);
                                }
                            }
                            aVar = aVar2;
                            c0339c = c0339c2;
                            bVar = bVar2;
                        }
                        i11++;
                        aVar = aVar2;
                        c0339c = c0339c2;
                        bVar = bVar2;
                    } else if (eventType == 4) {
                        ((d) ne.a.e(dVar)).a(d.d(newPullParser.getText()));
                    } else if (eventType == 3) {
                        if (newPullParser.getName().equals("tt")) {
                            hVar = new h((d) ne.a.e((d) arrayDeque.peek()), hashMap, hashMap2, hashMap3);
                        }
                        arrayDeque.pop();
                    }
                } else if (eventType == 2) {
                    i11++;
                } else if (eventType == 3) {
                    i11--;
                }
                newPullParser.next();
            }
            if (hVar != null) {
                return hVar;
            }
            throw new i("No TTML subtitles found");
        } catch (IOException e11) {
            throw new IllegalStateException("Unexpected error when reading input.", e11);
        } catch (XmlPullParserException e12) {
            throw new i("Unable to decode source", e12);
        }
    }
}
