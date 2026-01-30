package ud;

import android.net.Uri;
import android.text.TextUtils;
import android.util.Pair;
import android.util.Xml;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.j;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import ji.s;
import kotlin.jvm.internal.LongCompanionObject;
import lc.l0;
import ne.c0;
import ne.u0;
import ne.w0;
import ne.y;
import ne.y0;
import org.webrtc.MediaStreamTrack;
import org.xml.sax.helpers.DefaultHandler;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
import org.xmlpull.v1.XmlPullParserFactory;
import org.xmlpull.v1.XmlSerializer;
import rc.m;
import ud.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends DefaultHandler implements j.a {

    /* renamed from: b  reason: collision with root package name */
    private static final Pattern f50177b = Pattern.compile("(\\d+)(?:/(\\d+))?");

    /* renamed from: c  reason: collision with root package name */
    private static final Pattern f50178c = Pattern.compile("CC([1-4])=.*");

    /* renamed from: d  reason: collision with root package name */
    private static final Pattern f50179d = Pattern.compile("([1-9]|[1-5][0-9]|6[0-3])=.*");

    /* renamed from: e  reason: collision with root package name */
    private static final int[] f50180e = {-1, 1, 2, 3, 4, 5, 6, 8, 2, 3, 4, 7, 8, 24, 8, 12, 10, 12, 14, 12, 14};

    /* renamed from: a  reason: collision with root package name */
    private final XmlPullParserFactory f50181a;

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final Format f50182a;

        /* renamed from: b  reason: collision with root package name */
        public final s f50183b;

        /* renamed from: c  reason: collision with root package name */
        public final k f50184c;

        /* renamed from: d  reason: collision with root package name */
        public final String f50185d;

        /* renamed from: e  reason: collision with root package name */
        public final ArrayList f50186e;

        /* renamed from: f  reason: collision with root package name */
        public final ArrayList f50187f;

        /* renamed from: g  reason: collision with root package name */
        public final long f50188g;

        /* renamed from: h  reason: collision with root package name */
        public final List f50189h;

        /* renamed from: i  reason: collision with root package name */
        public final List f50190i;

        public a(Format format, List list, k kVar, String str, ArrayList arrayList, ArrayList arrayList2, List list2, List list3, long j10) {
            this.f50182a = format;
            this.f50183b = s.m(list);
            this.f50184c = kVar;
            this.f50185d = str;
            this.f50186e = arrayList;
            this.f50187f = arrayList2;
            this.f50189h = list2;
            this.f50190i = list3;
            this.f50188g = j10;
        }
    }

    public d() {
        try {
            this.f50181a = XmlPullParserFactory.newInstance();
        } catch (XmlPullParserException e10) {
            throw new RuntimeException("Couldn't create XmlPullParserFactory instance", e10);
        }
    }

    protected static int D(List list) {
        String str;
        for (int i10 = 0; i10 < list.size(); i10++) {
            e eVar = (e) list.get(i10);
            if ("urn:scte:dash:cc:cea-608:2015".equals(eVar.f50191a) && (str = eVar.f50192b) != null) {
                Matcher matcher = f50178c.matcher(str);
                if (matcher.matches()) {
                    return Integer.parseInt(matcher.group(1));
                }
                y.i("MpdParser", "Unable to parse CEA-608 channel number from: " + eVar.f50192b);
            }
        }
        return -1;
    }

    protected static int E(List list) {
        String str;
        for (int i10 = 0; i10 < list.size(); i10++) {
            e eVar = (e) list.get(i10);
            if ("urn:scte:dash:cc:cea-708:2015".equals(eVar.f50191a) && (str = eVar.f50192b) != null) {
                Matcher matcher = f50179d.matcher(str);
                if (matcher.matches()) {
                    return Integer.parseInt(matcher.group(1));
                }
                y.i("MpdParser", "Unable to parse CEA-708 service block number from: " + eVar.f50192b);
            }
        }
        return -1;
    }

    protected static long H(XmlPullParser xmlPullParser, String str, long j10) {
        String attributeValue = xmlPullParser.getAttributeValue(null, str);
        if (attributeValue == null) {
            return j10;
        }
        return w0.R0(attributeValue);
    }

    protected static e I(XmlPullParser xmlPullParser, String str) {
        String r02 = r0(xmlPullParser, "schemeIdUri", "");
        String r03 = r0(xmlPullParser, "value", null);
        String r04 = r0(xmlPullParser, StackTraceHelper.ID_KEY, null);
        do {
            xmlPullParser.next();
        } while (!y0.d(xmlPullParser, str));
        return new e(r02, r03, r04);
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    protected static int J(XmlPullParser xmlPullParser) {
        char c10;
        String attributeValue = xmlPullParser.getAttributeValue(null, "value");
        if (attributeValue == null) {
            return -1;
        }
        String e10 = ii.b.e(attributeValue);
        e10.getClass();
        switch (e10.hashCode()) {
            case 1596796:
                if (e10.equals("4000")) {
                    c10 = 0;
                    break;
                }
                c10 = 65535;
                break;
            case 2937391:
                if (e10.equals("a000")) {
                    c10 = 1;
                    break;
                }
                c10 = 65535;
                break;
            case 3094035:
                if (e10.equals("f801")) {
                    c10 = 2;
                    break;
                }
                c10 = 65535;
                break;
            case 3133436:
                if (e10.equals("fa01")) {
                    c10 = 3;
                    break;
                }
                c10 = 65535;
                break;
            default:
                c10 = 65535;
                break;
        }
        switch (c10) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 6;
            case 3:
                return 8;
            default:
                return -1;
        }
    }

    protected static int K(XmlPullParser xmlPullParser) {
        int U = U(xmlPullParser, "value", -1);
        if (U <= 0 || U >= 33) {
            return -1;
        }
        return U;
    }

    protected static int L(XmlPullParser xmlPullParser) {
        int bitCount;
        String attributeValue = xmlPullParser.getAttributeValue(null, "value");
        if (attributeValue == null || (bitCount = Integer.bitCount(Integer.parseInt(attributeValue, 16))) == 0) {
            return -1;
        }
        return bitCount;
    }

    protected static long M(XmlPullParser xmlPullParser, String str, long j10) {
        String attributeValue = xmlPullParser.getAttributeValue(null, str);
        if (attributeValue == null) {
            return j10;
        }
        return w0.S0(attributeValue);
    }

    protected static String N(List list) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            e eVar = (e) list.get(i10);
            String str = eVar.f50191a;
            if (!"tag:dolby.com,2018:dash:EC3_ExtensionType:2018".equals(str) || !"JOC".equals(eVar.f50192b)) {
                if ("tag:dolby.com,2014:dash:DolbyDigitalPlusExtensionType:2014".equals(str) && "ec+3".equals(eVar.f50192b)) {
                    return "audio/eac3-joc";
                }
            } else {
                return "audio/eac3-joc";
            }
        }
        return "audio/eac3";
    }

    protected static float R(XmlPullParser xmlPullParser, String str, float f10) {
        String attributeValue = xmlPullParser.getAttributeValue(null, str);
        if (attributeValue == null) {
            return f10;
        }
        return Float.parseFloat(attributeValue);
    }

    protected static float S(XmlPullParser xmlPullParser, float f10) {
        String attributeValue = xmlPullParser.getAttributeValue(null, "frameRate");
        if (attributeValue != null) {
            Matcher matcher = f50177b.matcher(attributeValue);
            if (matcher.matches()) {
                int parseInt = Integer.parseInt(matcher.group(1));
                String group = matcher.group(2);
                if (!TextUtils.isEmpty(group)) {
                    return parseInt / Integer.parseInt(group);
                }
                return parseInt;
            }
        }
        return f10;
    }

    protected static int U(XmlPullParser xmlPullParser, String str, int i10) {
        String attributeValue = xmlPullParser.getAttributeValue(null, str);
        if (attributeValue == null) {
            return i10;
        }
        return Integer.parseInt(attributeValue);
    }

    protected static long W(List list) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            e eVar = (e) list.get(i10);
            if (ii.b.a("http://dashif.org/guidelines/last-segment-number", eVar.f50191a)) {
                return Long.parseLong(eVar.f50192b);
            }
        }
        return -1L;
    }

    protected static long X(XmlPullParser xmlPullParser, String str, long j10) {
        String attributeValue = xmlPullParser.getAttributeValue(null, str);
        if (attributeValue == null) {
            return j10;
        }
        return Long.parseLong(attributeValue);
    }

    protected static int Z(XmlPullParser xmlPullParser) {
        int U = U(xmlPullParser, "value", -1);
        if (U >= 0) {
            int[] iArr = f50180e;
            if (U < iArr.length) {
                return iArr[U];
            }
        }
        return -1;
    }

    private long b(List list, long j10, long j11, int i10, long j12) {
        int m10;
        if (i10 >= 0) {
            m10 = i10 + 1;
        } else {
            m10 = (int) w0.m(j12 - j10, j11);
        }
        for (int i11 = 0; i11 < m10; i11++) {
            list.add(m(j10, j11));
            j10 += j11;
        }
        return j10;
    }

    private static int p(int i10, int i11) {
        boolean z10;
        if (i10 == -1) {
            return i11;
        }
        if (i11 == -1) {
            return i10;
        }
        if (i10 == i11) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        return i10;
    }

    private static String q(String str, String str2) {
        if (str == null) {
            return str2;
        }
        if (str2 == null) {
            return str;
        }
        ne.a.g(str.equals(str2));
        return str;
    }

    private static void r(ArrayList arrayList) {
        String str;
        int i10 = 0;
        while (true) {
            if (i10 < arrayList.size()) {
                m.b bVar = (m.b) arrayList.get(i10);
                if (lc.d.f37071c.equals(bVar.f48238e) && (str = bVar.f48239i) != null) {
                    arrayList.remove(i10);
                    break;
                }
                i10++;
            } else {
                str = null;
                break;
            }
        }
        if (str != null) {
            for (int i11 = 0; i11 < arrayList.size(); i11++) {
                m.b bVar2 = (m.b) arrayList.get(i11);
                if (lc.d.f37070b.equals(bVar2.f48238e) && bVar2.f48239i == null) {
                    arrayList.set(i11, new m.b(lc.d.f37071c, str, bVar2.f48240o, bVar2.f48241p));
                }
            }
        }
    }

    protected static String r0(XmlPullParser xmlPullParser, String str, String str2) {
        String attributeValue = xmlPullParser.getAttributeValue(null, str);
        if (attributeValue == null) {
            return str2;
        }
        return attributeValue;
    }

    private static void s(ArrayList arrayList) {
        for (int size = arrayList.size() - 1; size >= 0; size--) {
            m.b bVar = (m.b) arrayList.get(size);
            if (!bVar.c()) {
                int i10 = 0;
                while (true) {
                    if (i10 >= arrayList.size()) {
                        break;
                    } else if (((m.b) arrayList.get(i10)).a(bVar)) {
                        arrayList.remove(size);
                        break;
                    } else {
                        i10++;
                    }
                }
            }
        }
    }

    protected static String s0(XmlPullParser xmlPullParser, String str) {
        String str2 = "";
        do {
            xmlPullParser.next();
            if (xmlPullParser.getEventType() == 4) {
                str2 = xmlPullParser.getText();
            } else {
                w(xmlPullParser);
            }
        } while (!y0.d(xmlPullParser, str));
        return str2;
    }

    private static long t(long j10, long j11) {
        if (j11 != -9223372036854775807L) {
            j10 = j11;
        }
        if (j10 == LongCompanionObject.MAX_VALUE) {
            return -9223372036854775807L;
        }
        return j10;
    }

    private static String u(String str, String str2) {
        if (c0.o(str)) {
            return c0.c(str2);
        }
        if (c0.s(str)) {
            return c0.n(str2);
        }
        if (c0.r(str) || c0.p(str)) {
            return str;
        }
        if ("application/mp4".equals(str)) {
            String g10 = c0.g(str2);
            if ("text/vtt".equals(g10)) {
                return "application/x-mp4-vtt";
            }
            return g10;
        }
        return null;
    }

    private boolean v(String[] strArr) {
        for (String str : strArr) {
            if (str.startsWith("urn:dvb:dash:profile:dvb-dash:")) {
                return true;
            }
        }
        return false;
    }

    public static void w(XmlPullParser xmlPullParser) {
        if (y0.e(xmlPullParser)) {
            int i10 = 1;
            while (i10 != 0) {
                xmlPullParser.next();
                if (y0.e(xmlPullParser)) {
                    i10++;
                } else if (y0.c(xmlPullParser)) {
                    i10--;
                }
            }
        }
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    protected int A(XmlPullParser xmlPullParser) {
        char c10;
        String r02 = r0(xmlPullParser, "schemeIdUri", null);
        r02.getClass();
        int i10 = -1;
        switch (r02.hashCode()) {
            case -2128649360:
                if (r02.equals("urn:dts:dash:audio_channel_configuration:2012")) {
                    c10 = 0;
                    break;
                }
                c10 = 65535;
                break;
            case -1352850286:
                if (r02.equals("urn:mpeg:dash:23003:3:audio_channel_configuration:2011")) {
                    c10 = 1;
                    break;
                }
                c10 = 65535;
                break;
            case -1138141449:
                if (r02.equals("tag:dolby.com,2014:dash:audio_channel_configuration:2011")) {
                    c10 = 2;
                    break;
                }
                c10 = 65535;
                break;
            case -986633423:
                if (r02.equals("urn:mpeg:mpegB:cicp:ChannelConfiguration")) {
                    c10 = 3;
                    break;
                }
                c10 = 65535;
                break;
            case -79006963:
                if (r02.equals("tag:dts.com,2014:dash:audio_channel_configuration:2012")) {
                    c10 = 4;
                    break;
                }
                c10 = 65535;
                break;
            case 312179081:
                if (r02.equals("tag:dts.com,2018:uhd:audio_channel_configuration")) {
                    c10 = 5;
                    break;
                }
                c10 = 65535;
                break;
            case 2036691300:
                if (r02.equals("urn:dolby:dash:audio_channel_configuration:2011")) {
                    c10 = 6;
                    break;
                }
                c10 = 65535;
                break;
            default:
                c10 = 65535;
                break;
        }
        switch (c10) {
            case 0:
            case 4:
                i10 = K(xmlPullParser);
                break;
            case 1:
                i10 = U(xmlPullParser, "value", -1);
                break;
            case 2:
            case 6:
                i10 = J(xmlPullParser);
                break;
            case 3:
                i10 = Z(xmlPullParser);
                break;
            case 5:
                i10 = L(xmlPullParser);
                break;
        }
        do {
            xmlPullParser.next();
        } while (!y0.d(xmlPullParser, "AudioChannelConfiguration"));
        return i10;
    }

    protected long B(XmlPullParser xmlPullParser, long j10) {
        String attributeValue = xmlPullParser.getAttributeValue(null, "availabilityTimeOffset");
        if (attributeValue == null) {
            return j10;
        }
        if ("INF".equals(attributeValue)) {
            return LongCompanionObject.MAX_VALUE;
        }
        return Float.parseFloat(attributeValue) * 1000000.0f;
    }

    protected List C(XmlPullParser xmlPullParser, List list, boolean z10) {
        int i10;
        String str;
        String attributeValue = xmlPullParser.getAttributeValue(null, "dvb:priority");
        int i11 = 1;
        if (attributeValue != null) {
            i10 = Integer.parseInt(attributeValue);
        } else if (z10) {
            i10 = 1;
        } else {
            i10 = Integer.MIN_VALUE;
        }
        String attributeValue2 = xmlPullParser.getAttributeValue(null, "dvb:weight");
        if (attributeValue2 != null) {
            i11 = Integer.parseInt(attributeValue2);
        }
        String attributeValue3 = xmlPullParser.getAttributeValue(null, "serviceLocation");
        String s02 = s0(xmlPullParser, "BaseURL");
        if (u0.b(s02)) {
            if (attributeValue3 == null) {
                attributeValue3 = s02;
            }
            return ji.y.j(new b(s02, attributeValue3, i10, i11));
        }
        ArrayList arrayList = new ArrayList();
        for (int i12 = 0; i12 < list.size(); i12++) {
            b bVar = (b) list.get(i12);
            String d10 = u0.d(bVar.f50160a, s02);
            if (attributeValue3 == null) {
                str = d10;
            } else {
                str = attributeValue3;
            }
            if (z10) {
                i10 = bVar.f50162c;
                i11 = bVar.f50163d;
                str = bVar.f50161b;
            }
            arrayList.add(new b(d10, str, i10, i11));
        }
        return arrayList;
    }

    /* JADX WARN: Removed duplicated region for block: B:49:0x00b5  */
    /* JADX WARN: Removed duplicated region for block: B:50:0x00bc  */
    /* JADX WARN: Removed duplicated region for block: B:71:0x011a  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected android.util.Pair F(org.xmlpull.v1.XmlPullParser r11) {
        /*
            Method dump skipped, instructions count: 324
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ud.d.F(org.xmlpull.v1.XmlPullParser):android.util.Pair");
    }

    protected int G(XmlPullParser xmlPullParser) {
        String attributeValue = xmlPullParser.getAttributeValue(null, "contentType");
        if (TextUtils.isEmpty(attributeValue)) {
            return -1;
        }
        if (MediaStreamTrack.AUDIO_TRACK_KIND.equals(attributeValue)) {
            return 1;
        }
        if (MediaStreamTrack.VIDEO_TRACK_KIND.equals(attributeValue)) {
            return 2;
        }
        if ("text".equals(attributeValue)) {
            return 3;
        }
        if (!"image".equals(attributeValue)) {
            return -1;
        }
        return 4;
    }

    protected Pair O(XmlPullParser xmlPullParser, String str, String str2, long j10, long j11, ByteArrayOutputStream byteArrayOutputStream) {
        long X = X(xmlPullParser, StackTraceHelper.ID_KEY, 0L);
        long X2 = X(xmlPullParser, "duration", -9223372036854775807L);
        long X3 = X(xmlPullParser, "presentationTime", 0L);
        long X0 = w0.X0(X2, 1000L, j10);
        long X02 = w0.X0(X3 - j11, 1000000L, j10);
        String r02 = r0(xmlPullParser, "messageData", null);
        byte[] P = P(xmlPullParser, byteArrayOutputStream);
        Long valueOf = Long.valueOf(X02);
        if (r02 != null) {
            P = w0.s0(r02);
        }
        return Pair.create(valueOf, d(str, str2, X, X0, P));
    }

    protected byte[] P(XmlPullParser xmlPullParser, ByteArrayOutputStream byteArrayOutputStream) {
        byteArrayOutputStream.reset();
        XmlSerializer newSerializer = Xml.newSerializer();
        newSerializer.setOutput(byteArrayOutputStream, ii.d.f28537c.name());
        xmlPullParser.nextToken();
        while (!y0.d(xmlPullParser, "Event")) {
            switch (xmlPullParser.getEventType()) {
                case 0:
                    newSerializer.startDocument(null, Boolean.FALSE);
                    break;
                case 1:
                    newSerializer.endDocument();
                    break;
                case 2:
                    newSerializer.startTag(xmlPullParser.getNamespace(), xmlPullParser.getName());
                    for (int i10 = 0; i10 < xmlPullParser.getAttributeCount(); i10++) {
                        newSerializer.attribute(xmlPullParser.getAttributeNamespace(i10), xmlPullParser.getAttributeName(i10), xmlPullParser.getAttributeValue(i10));
                    }
                    break;
                case 3:
                    newSerializer.endTag(xmlPullParser.getNamespace(), xmlPullParser.getName());
                    break;
                case 4:
                    newSerializer.text(xmlPullParser.getText());
                    break;
                case 5:
                    newSerializer.cdsect(xmlPullParser.getText());
                    break;
                case 6:
                    newSerializer.entityRef(xmlPullParser.getText());
                    break;
                case 7:
                    newSerializer.ignorableWhitespace(xmlPullParser.getText());
                    break;
                case 8:
                    newSerializer.processingInstruction(xmlPullParser.getText());
                    break;
                case 9:
                    newSerializer.comment(xmlPullParser.getText());
                    break;
                case 10:
                    newSerializer.docdecl(xmlPullParser.getText());
                    break;
            }
            xmlPullParser.nextToken();
        }
        newSerializer.flush();
        return byteArrayOutputStream.toByteArray();
    }

    protected f Q(XmlPullParser xmlPullParser) {
        long j10;
        String str;
        String str2;
        XmlPullParser xmlPullParser2;
        String r02 = r0(xmlPullParser, "schemeIdUri", "");
        String r03 = r0(xmlPullParser, "value", "");
        long X = X(xmlPullParser, "timescale", 1L);
        long X2 = X(xmlPullParser, "presentationTimeOffset", 0L);
        ArrayList arrayList = new ArrayList();
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        while (true) {
            xmlPullParser.next();
            if (y0.f(xmlPullParser, "Event")) {
                j10 = X;
                str = r03;
                str2 = r02;
                xmlPullParser2 = xmlPullParser;
                arrayList.add(O(xmlPullParser2, str2, str, j10, X2, byteArrayOutputStream));
            } else {
                j10 = X;
                str = r03;
                str2 = r02;
                xmlPullParser2 = xmlPullParser;
                w(xmlPullParser2);
            }
            if (y0.d(xmlPullParser2, "EventStream")) {
                break;
            }
            xmlPullParser = xmlPullParser2;
            r02 = str2;
            r03 = str;
            X = j10;
        }
        long[] jArr = new long[arrayList.size()];
        id.a[] aVarArr = new id.a[arrayList.size()];
        for (int i10 = 0; i10 < arrayList.size(); i10++) {
            Pair pair = (Pair) arrayList.get(i10);
            jArr[i10] = ((Long) pair.first).longValue();
            aVarArr[i10] = (id.a) pair.second;
        }
        return e(str2, str, j10, jArr, aVarArr);
    }

    protected i T(XmlPullParser xmlPullParser) {
        return d0(xmlPullParser, "sourceURL", "range");
    }

    protected String V(XmlPullParser xmlPullParser) {
        return s0(xmlPullParser, "Label");
    }

    /* JADX WARN: Removed duplicated region for block: B:77:0x01bb  */
    /* JADX WARN: Removed duplicated region for block: B:79:0x01d8  */
    /* JADX WARN: Removed duplicated region for block: B:81:0x01e0 A[LOOP:0: B:24:0x00a5->B:81:0x01e0, LOOP_END] */
    /* JADX WARN: Removed duplicated region for block: B:83:0x019c A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected ud.c Y(org.xmlpull.v1.XmlPullParser r41, android.net.Uri r42) {
        /*
            Method dump skipped, instructions count: 516
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ud.d.Y(org.xmlpull.v1.XmlPullParser, android.net.Uri):ud.c");
    }

    protected Pair a0(XmlPullParser xmlPullParser, List list, long j10, long j11, long j12, long j13, boolean z10) {
        long j14;
        ArrayList arrayList;
        long j15;
        k kVar;
        ArrayList arrayList2;
        ArrayList arrayList3;
        long j16;
        Object obj;
        long j17;
        XmlPullParser xmlPullParser2;
        long j18;
        long j19;
        k l02;
        long j20;
        e eVar;
        long j21;
        k kVar2;
        boolean z11;
        long j22;
        ArrayList arrayList4;
        d dVar = this;
        XmlPullParser xmlPullParser3 = xmlPullParser;
        String attributeValue = xmlPullParser3.getAttributeValue(null, StackTraceHelper.ID_KEY);
        long M = M(xmlPullParser3, ViewProps.START, j10);
        if (j12 != -9223372036854775807L) {
            j14 = j12 + M;
        } else {
            j14 = -9223372036854775807L;
        }
        long M2 = M(xmlPullParser3, "duration", -9223372036854775807L);
        ArrayList arrayList5 = new ArrayList();
        ArrayList arrayList6 = new ArrayList();
        ArrayList arrayList7 = new ArrayList();
        long j23 = -9223372036854775807L;
        ArrayList arrayList8 = arrayList6;
        boolean z12 = false;
        e eVar2 = null;
        long j24 = j11;
        ArrayList arrayList9 = arrayList5;
        k kVar3 = null;
        long j25 = -9223372036854775807L;
        while (true) {
            xmlPullParser3.next();
            if (y0.f(xmlPullParser3, "BaseURL")) {
                if (!z12) {
                    j24 = dVar.B(xmlPullParser3, j24);
                    z12 = true;
                }
                arrayList7.addAll(dVar.C(xmlPullParser3, list, z10));
                arrayList3 = arrayList9;
                j20 = j24;
                arrayList2 = arrayList8;
                z11 = z12;
                j16 = j23;
                obj = null;
                j17 = M2;
                arrayList = arrayList7;
                eVar = eVar2;
                xmlPullParser2 = xmlPullParser3;
                kVar2 = kVar3;
                j22 = j25;
                j19 = j14;
            } else {
                ArrayList arrayList10 = arrayList9;
                if (y0.f(xmlPullParser3, "AdaptationSet")) {
                    if (!arrayList7.isEmpty()) {
                        arrayList4 = arrayList7;
                        arrayList = arrayList4;
                    } else {
                        arrayList = arrayList7;
                        arrayList4 = list;
                    }
                    ArrayList arrayList11 = arrayList8;
                    long j26 = j24;
                    long j27 = j14;
                    long j28 = M2;
                    ud.a y10 = dVar.y(xmlPullParser3, arrayList4, kVar3, j28, j26, j25, j27, j13, z10);
                    j14 = j27;
                    j15 = j25;
                    arrayList10.add(y10);
                    kVar = kVar3;
                    j17 = j28;
                    arrayList2 = arrayList11;
                    obj = null;
                    xmlPullParser2 = xmlPullParser3;
                    j18 = j26;
                    arrayList3 = arrayList10;
                    j16 = -9223372036854775807L;
                } else {
                    arrayList = arrayList7;
                    ArrayList arrayList12 = arrayList8;
                    long j29 = j24;
                    j15 = j25;
                    if (y0.f(xmlPullParser3, "EventStream")) {
                        arrayList12.add(Q(xmlPullParser));
                        kVar = kVar3;
                        j17 = M2;
                        arrayList2 = arrayList12;
                        arrayList3 = arrayList10;
                        j16 = -9223372036854775807L;
                        obj = null;
                        xmlPullParser2 = xmlPullParser3;
                        j18 = j29;
                    } else {
                        if (y0.f(xmlPullParser3, "SegmentBase")) {
                            l02 = dVar.j0(xmlPullParser3, null);
                            j20 = j29;
                            obj = null;
                            arrayList2 = arrayList12;
                            arrayList3 = arrayList10;
                            j16 = -9223372036854775807L;
                            j19 = j14;
                            j17 = M2;
                            eVar = eVar2;
                            xmlPullParser2 = xmlPullParser3;
                        } else if (y0.f(xmlPullParser3, "SegmentList")) {
                            long j30 = j14;
                            long j31 = M2;
                            long B = dVar.B(xmlPullParser3, -9223372036854775807L);
                            arrayList2 = arrayList12;
                            arrayList3 = arrayList10;
                            j16 = -9223372036854775807L;
                            k k02 = dVar.k0(xmlPullParser3, null, j30, j31, j29, B, j13);
                            j20 = j29;
                            obj = null;
                            j19 = j30;
                            j17 = j31;
                            eVar = eVar2;
                            xmlPullParser2 = xmlPullParser3;
                            j21 = B;
                            kVar2 = k02;
                            z11 = z12;
                            j22 = j21;
                        } else {
                            kVar = kVar3;
                            arrayList2 = arrayList12;
                            arrayList3 = arrayList10;
                            j16 = -9223372036854775807L;
                            if (y0.f(xmlPullParser3, "SegmentTemplate")) {
                                j15 = dVar.B(xmlPullParser3, -9223372036854775807L);
                                obj = null;
                                l02 = dVar.l0(xmlPullParser3, null, s.r(), j14, M2, j29, j15, j13);
                                j17 = M2;
                                xmlPullParser2 = xmlPullParser3;
                                j19 = j14;
                                j20 = j29;
                                eVar = eVar2;
                            } else {
                                obj = null;
                                j17 = M2;
                                xmlPullParser2 = xmlPullParser3;
                                j18 = j29;
                                j19 = j14;
                                if (y0.f(xmlPullParser2, "AssetIdentifier")) {
                                    eVar2 = I(xmlPullParser2, "AssetIdentifier");
                                } else {
                                    w(xmlPullParser2);
                                }
                                j20 = j18;
                                eVar = eVar2;
                                j21 = j15;
                                kVar2 = kVar;
                                z11 = z12;
                                j22 = j21;
                            }
                        }
                        j21 = j15;
                        kVar2 = l02;
                        z11 = z12;
                        j22 = j21;
                    }
                }
                j19 = j14;
                j20 = j18;
                eVar = eVar2;
                j21 = j15;
                kVar2 = kVar;
                z11 = z12;
                j22 = j21;
            }
            if (y0.d(xmlPullParser2, "Period")) {
                return Pair.create(h(attributeValue, M, arrayList3, arrayList2, eVar), Long.valueOf(j17));
            }
            dVar = this;
            xmlPullParser3 = xmlPullParser2;
            j14 = j19;
            kVar3 = kVar2;
            j25 = j22;
            arrayList7 = arrayList;
            arrayList9 = arrayList3;
            eVar2 = eVar;
            z12 = z11;
            M2 = j17;
            j23 = j16;
            j24 = j20;
            arrayList8 = arrayList2;
        }
    }

    protected String[] b0(XmlPullParser xmlPullParser, String str, String[] strArr) {
        String attributeValue = xmlPullParser.getAttributeValue(null, str);
        if (attributeValue == null) {
            return strArr;
        }
        return attributeValue.split(",");
    }

    protected ud.a c(long j10, int i10, List list, List list2, List list3, List list4) {
        return new ud.a(j10, i10, list, list2, list3, list4);
    }

    protected h c0(XmlPullParser xmlPullParser) {
        String str = null;
        String r02 = r0(xmlPullParser, "moreInformationURL", null);
        String r03 = r0(xmlPullParser, "lang", null);
        String str2 = null;
        String str3 = null;
        while (true) {
            xmlPullParser.next();
            if (y0.f(xmlPullParser, "Title")) {
                str = xmlPullParser.nextText();
            } else if (y0.f(xmlPullParser, "Source")) {
                str2 = xmlPullParser.nextText();
            } else if (y0.f(xmlPullParser, "Copyright")) {
                str3 = xmlPullParser.nextText();
            } else {
                w(xmlPullParser);
            }
            String str4 = str2;
            String str5 = str;
            String str6 = str3;
            if (y0.d(xmlPullParser, "ProgramInformation")) {
                return new h(str5, str4, str6, r02, r03);
            }
            str = str5;
            str2 = str4;
            str3 = str6;
        }
    }

    protected id.a d(String str, String str2, long j10, long j11, byte[] bArr) {
        return new id.a(str, str2, j11, j10, bArr);
    }

    protected i d0(XmlPullParser xmlPullParser, String str, String str2) {
        long j10;
        String attributeValue = xmlPullParser.getAttributeValue(null, str);
        String attributeValue2 = xmlPullParser.getAttributeValue(null, str2);
        long j11 = -1;
        if (attributeValue2 != null) {
            String[] split = attributeValue2.split("-");
            j10 = Long.parseLong(split[0]);
            if (split.length == 2) {
                j11 = (Long.parseLong(split[1]) - j10) + 1;
            }
        } else {
            j10 = 0;
        }
        return i(attributeValue, j10, j11);
    }

    protected f e(String str, String str2, long j10, long[] jArr, id.a[] aVarArr) {
        return new f(str, str2, j10, jArr, aVarArr);
    }

    /* JADX WARN: Removed duplicated region for block: B:56:0x0214 A[LOOP:0: B:3:0x006c->B:56:0x0214, LOOP_END] */
    /* JADX WARN: Removed duplicated region for block: B:57:0x01c7 A[EDGE_INSN: B:57:0x01c7->B:46:0x01c7 ?: BREAK  , SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected ud.d.a e0(org.xmlpull.v1.XmlPullParser r33, java.util.List r34, java.lang.String r35, java.lang.String r36, int r37, int r38, float r39, int r40, int r41, java.lang.String r42, java.util.List r43, java.util.List r44, java.util.List r45, java.util.List r46, ud.k r47, long r48, long r50, long r52, long r54, long r56, boolean r58) {
        /*
            Method dump skipped, instructions count: 563
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ud.d.e0(org.xmlpull.v1.XmlPullParser, java.util.List, java.lang.String, java.lang.String, int, int, float, int, int, java.lang.String, java.util.List, java.util.List, java.util.List, java.util.List, ud.k, long, long, long, long, long, boolean):ud.d$a");
    }

    protected Format f(String str, String str2, int i10, int i11, float f10, int i12, int i13, int i14, String str3, List list, List list2, String str4, List list3, List list4) {
        int i15;
        int i16;
        String str5 = str4;
        String u10 = u(str2, str5);
        if ("audio/eac3".equals(u10)) {
            u10 = N(list4);
            if ("audio/eac3-joc".equals(u10)) {
                str5 = "ec+3";
            }
        }
        int p02 = p0(list);
        int i02 = i0(list) | f0(list2) | h0(list3) | h0(list4);
        Pair t02 = t0(list3);
        Format.b X = new Format.b().U(str).M(str2).g0(u10).K(str5).b0(i14).i0(p02).e0(i02).X(str3);
        int i17 = -1;
        if (t02 != null) {
            i15 = ((Integer) t02.first).intValue();
        } else {
            i15 = -1;
        }
        Format.b l02 = X.l0(i15);
        if (t02 != null) {
            i16 = ((Integer) t02.second).intValue();
        } else {
            i16 = -1;
        }
        Format.b m02 = l02.m0(i16);
        if (c0.s(u10)) {
            m02.n0(i10).S(i11).R(f10);
        } else if (c0.o(u10)) {
            m02.J(i12).h0(i13);
        } else if (c0.r(u10)) {
            if ("application/cea-608".equals(u10)) {
                i17 = D(list2);
            } else if ("application/cea-708".equals(u10)) {
                i17 = E(list2);
            }
            m02.H(i17);
        } else if (c0.p(u10)) {
            m02.n0(i10).S(i11);
        }
        return m02.G();
    }

    protected int f0(List list) {
        int u02;
        int i10 = 0;
        for (int i11 = 0; i11 < list.size(); i11++) {
            e eVar = (e) list.get(i11);
            if (ii.b.a("urn:mpeg:dash:role:2011", eVar.f50191a)) {
                u02 = g0(eVar.f50192b);
            } else if (ii.b.a("urn:tva:metadata:cs:AudioPurposeCS:2007", eVar.f50191a)) {
                u02 = u0(eVar.f50192b);
            }
            i10 |= u02;
        }
        return i10;
    }

    protected c g(long j10, long j11, long j12, boolean z10, long j13, long j14, long j15, long j16, h hVar, o oVar, l lVar, Uri uri, List list) {
        return new c(j10, j11, j12, z10, j13, j14, j15, j16, hVar, oVar, lVar, uri, list);
    }

    protected int g0(String str) {
        if (str == null) {
            return 0;
        }
        char c10 = 65535;
        switch (str.hashCode()) {
            case -2060497896:
                if (str.equals("subtitle")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1724546052:
                if (str.equals("description")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1580883024:
                if (str.equals("enhanced-audio-intelligibility")) {
                    c10 = 2;
                    break;
                }
                break;
            case -1574842690:
                if (str.equals("forced_subtitle")) {
                    c10 = 3;
                    break;
                }
                break;
            case -1408024454:
                if (str.equals("alternate")) {
                    c10 = 4;
                    break;
                }
                break;
            case -1396432756:
                if (str.equals("forced-subtitle")) {
                    c10 = 5;
                    break;
                }
                break;
            case 99825:
                if (str.equals("dub")) {
                    c10 = 6;
                    break;
                }
                break;
            case 3343801:
                if (str.equals("main")) {
                    c10 = 7;
                    break;
                }
                break;
            case 3530173:
                if (str.equals("sign")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 552573414:
                if (str.equals("caption")) {
                    c10 = '\t';
                    break;
                }
                break;
            case 899152809:
                if (str.equals("commentary")) {
                    c10 = '\n';
                    break;
                }
                break;
            case 1629013393:
                if (str.equals("emergency")) {
                    c10 = 11;
                    break;
                }
                break;
            case 1855372047:
                if (str.equals("supplementary")) {
                    c10 = '\f';
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
            case 3:
            case 5:
                return IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            case 1:
                return IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
            case 2:
                return RecyclerView.ItemAnimator.FLAG_MOVED;
            case 4:
                return 2;
            case 6:
                return 16;
            case 7:
                return 1;
            case '\b':
                return IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
            case '\t':
                return 64;
            case '\n':
                return 8;
            case 11:
                return 32;
            case '\f':
                return 4;
            default:
                return 0;
        }
    }

    protected g h(String str, long j10, List list, List list2, e eVar) {
        return new g(str, j10, list, list2, eVar);
    }

    protected int h0(List list) {
        int i10 = 0;
        for (int i11 = 0; i11 < list.size(); i11++) {
            if (ii.b.a("http://dashif.org/guidelines/trickmode", ((e) list.get(i11)).f50191a)) {
                i10 = 16384;
            }
        }
        return i10;
    }

    protected i i(String str, long j10, long j11) {
        return new i(str, j10, j11);
    }

    protected int i0(List list) {
        int i10 = 0;
        for (int i11 = 0; i11 < list.size(); i11++) {
            e eVar = (e) list.get(i11);
            if (ii.b.a("urn:mpeg:dash:role:2011", eVar.f50191a)) {
                i10 |= g0(eVar.f50192b);
            }
        }
        return i10;
    }

    protected j j(a aVar, String str, String str2, ArrayList arrayList, ArrayList arrayList2) {
        Format.b b10 = aVar.f50182a.b();
        if (str != null) {
            b10.W(str);
        }
        String str3 = aVar.f50185d;
        if (str3 != null) {
            str2 = str3;
        }
        ArrayList arrayList3 = aVar.f50186e;
        arrayList3.addAll(arrayList);
        if (!arrayList3.isEmpty()) {
            r(arrayList3);
            s(arrayList3);
            b10.O(new rc.m(str2, arrayList3));
        }
        ArrayList arrayList4 = aVar.f50187f;
        arrayList4.addAll(arrayList2);
        return j.o(aVar.f50188g, b10.G(), aVar.f50183b, aVar.f50184c, arrayList4, aVar.f50189h, aVar.f50190i, null);
    }

    protected k.e j0(XmlPullParser xmlPullParser, k.e eVar) {
        long j10;
        long j11;
        long j12;
        if (eVar != null) {
            j10 = eVar.f50228b;
        } else {
            j10 = 1;
        }
        long X = X(xmlPullParser, "timescale", j10);
        long j13 = 0;
        if (eVar != null) {
            j11 = eVar.f50229c;
        } else {
            j11 = 0;
        }
        long X2 = X(xmlPullParser, "presentationTimeOffset", j11);
        if (eVar != null) {
            j12 = eVar.f50242d;
        } else {
            j12 = 0;
        }
        if (eVar != null) {
            j13 = eVar.f50243e;
        }
        i iVar = null;
        String attributeValue = xmlPullParser.getAttributeValue(null, "indexRange");
        if (attributeValue != null) {
            String[] split = attributeValue.split("-");
            j12 = Long.parseLong(split[0]);
            j13 = (Long.parseLong(split[1]) - j12) + 1;
        }
        long j14 = j13;
        if (eVar != null) {
            iVar = eVar.f50227a;
        }
        while (true) {
            xmlPullParser.next();
            if (y0.f(xmlPullParser, "Initialization")) {
                iVar = T(xmlPullParser);
            } else {
                w(xmlPullParser);
            }
            i iVar2 = iVar;
            if (y0.d(xmlPullParser, "SegmentBase")) {
                return n(iVar2, X, X2, j12, j14);
            }
            iVar = iVar2;
        }
    }

    protected k.b k(i iVar, long j10, long j11, long j12, long j13, List list, long j14, List list2, long j15, long j16) {
        return new k.b(iVar, j10, j11, j12, j13, list, j14, list2, w0.K0(j15), w0.K0(j16));
    }

    protected k.b k0(XmlPullParser xmlPullParser, k.b bVar, long j10, long j11, long j12, long j13, long j14) {
        long j15;
        long j16;
        long j17;
        long j18;
        long j19 = 1;
        if (bVar != null) {
            j15 = bVar.f50228b;
        } else {
            j15 = 1;
        }
        long X = X(xmlPullParser, "timescale", j15);
        if (bVar != null) {
            j16 = bVar.f50229c;
        } else {
            j16 = 0;
        }
        long X2 = X(xmlPullParser, "presentationTimeOffset", j16);
        if (bVar != null) {
            j17 = bVar.f50231e;
        } else {
            j17 = -9223372036854775807L;
        }
        long X3 = X(xmlPullParser, "duration", j17);
        if (bVar != null) {
            j19 = bVar.f50230d;
        }
        long X4 = X(xmlPullParser, "startNumber", j19);
        long t10 = t(j12, j13);
        List list = null;
        i iVar = null;
        List list2 = null;
        while (true) {
            xmlPullParser.next();
            if (y0.f(xmlPullParser, "Initialization")) {
                iVar = T(xmlPullParser);
                j18 = X;
            } else if (y0.f(xmlPullParser, "SegmentTimeline")) {
                j18 = X;
                list2 = m0(xmlPullParser, j18, j11);
            } else {
                j18 = X;
                if (y0.f(xmlPullParser, "SegmentURL")) {
                    if (list == null) {
                        list = new ArrayList();
                    }
                    list.add(n0(xmlPullParser));
                } else {
                    w(xmlPullParser);
                }
            }
            if (y0.d(xmlPullParser, "SegmentList")) {
                break;
            }
            X = j18;
        }
        if (bVar != null) {
            if (iVar == null) {
                iVar = bVar.f50227a;
            }
            if (list2 == null) {
                list2 = bVar.f50232f;
            }
            if (list == null) {
                list = bVar.f50236j;
            }
        }
        return k(iVar, j18, X2, X4, X3, list2, t10, list, j14, j10);
    }

    protected k.c l(i iVar, long j10, long j11, long j12, long j13, long j14, List list, long j15, n nVar, n nVar2, long j16, long j17) {
        return new k.c(iVar, j10, j11, j12, j13, j14, list, j15, nVar, nVar2, w0.K0(j16), w0.K0(j17));
    }

    protected k.c l0(XmlPullParser xmlPullParser, k.c cVar, List list, long j10, long j11, long j12, long j13, long j14) {
        long j15;
        long j16;
        long j17;
        n nVar;
        n nVar2;
        long j18;
        d dVar = this;
        long j19 = 1;
        if (cVar != null) {
            j15 = cVar.f50228b;
        } else {
            j15 = 1;
        }
        long X = X(xmlPullParser, "timescale", j15);
        if (cVar != null) {
            j16 = cVar.f50229c;
        } else {
            j16 = 0;
        }
        long X2 = X(xmlPullParser, "presentationTimeOffset", j16);
        if (cVar != null) {
            j17 = cVar.f50231e;
        } else {
            j17 = -9223372036854775807L;
        }
        long X3 = X(xmlPullParser, "duration", j17);
        if (cVar != null) {
            j19 = cVar.f50230d;
        }
        long X4 = X(xmlPullParser, "startNumber", j19);
        long W = W(list);
        long t10 = t(j12, j13);
        if (cVar != null) {
            nVar = cVar.f50238k;
        } else {
            nVar = null;
        }
        n v02 = dVar.v0(xmlPullParser, "media", nVar);
        if (cVar != null) {
            nVar2 = cVar.f50237j;
        } else {
            nVar2 = null;
        }
        n v03 = dVar.v0(xmlPullParser, "initialization", nVar2);
        i iVar = null;
        List list2 = null;
        while (true) {
            xmlPullParser.next();
            if (y0.f(xmlPullParser, "Initialization")) {
                iVar = T(xmlPullParser);
                j18 = X;
            } else if (y0.f(xmlPullParser, "SegmentTimeline")) {
                j18 = X;
                list2 = dVar.m0(xmlPullParser, j18, j11);
            } else {
                j18 = X;
                w(xmlPullParser);
            }
            if (y0.d(xmlPullParser, "SegmentTemplate")) {
                break;
            }
            dVar = this;
            t10 = t10;
            W = W;
            X4 = X4;
            X2 = X2;
            X = j18;
        }
        if (cVar != null) {
            if (iVar == null) {
                iVar = cVar.f50227a;
            }
            if (list2 == null) {
                list2 = cVar.f50232f;
            }
        }
        return l(iVar, j18, X2, X4, W, X3, list2, t10, v03, v02, j14, j10);
    }

    protected k.d m(long j10, long j11) {
        return new k.d(j10, j11);
    }

    protected List m0(XmlPullParser xmlPullParser, long j10, long j11) {
        ArrayList arrayList = new ArrayList();
        long j12 = 0;
        long j13 = -9223372036854775807L;
        boolean z10 = false;
        int i10 = 0;
        do {
            xmlPullParser.next();
            if (y0.f(xmlPullParser, "S")) {
                long X = X(xmlPullParser, "t", -9223372036854775807L);
                if (z10) {
                    ArrayList arrayList2 = arrayList;
                    j12 = b(arrayList2, j12, j13, i10, X);
                    arrayList = arrayList2;
                }
                if (X != -9223372036854775807L) {
                    j12 = X;
                }
                j13 = X(xmlPullParser, "d", -9223372036854775807L);
                i10 = U(xmlPullParser, "r", 0);
                z10 = true;
            } else {
                w(xmlPullParser);
            }
        } while (!y0.d(xmlPullParser, "SegmentTimeline"));
        if (z10) {
            b(arrayList, j12, j13, i10, w0.X0(j11, j10, 1000L));
        }
        return arrayList;
    }

    protected k.e n(i iVar, long j10, long j11, long j12, long j13) {
        return new k.e(iVar, j10, j11, j12, j13);
    }

    protected i n0(XmlPullParser xmlPullParser) {
        return d0(xmlPullParser, "media", "mediaRange");
    }

    protected o o(String str, String str2) {
        return new o(str, str2);
    }

    protected int o0(String str) {
        if (str == null) {
            return 0;
        }
        if (!str.equals("forced_subtitle") && !str.equals("forced-subtitle")) {
            return 0;
        }
        return 2;
    }

    protected int p0(List list) {
        int i10 = 0;
        for (int i11 = 0; i11 < list.size(); i11++) {
            e eVar = (e) list.get(i11);
            if (ii.b.a("urn:mpeg:dash:role:2011", eVar.f50191a)) {
                i10 |= o0(eVar.f50192b);
            }
        }
        return i10;
    }

    protected l q0(XmlPullParser xmlPullParser) {
        long j10 = -9223372036854775807L;
        long j11 = -9223372036854775807L;
        long j12 = -9223372036854775807L;
        float f10 = -3.4028235E38f;
        float f11 = -3.4028235E38f;
        while (true) {
            xmlPullParser.next();
            if (y0.f(xmlPullParser, "Latency")) {
                j10 = X(xmlPullParser, "target", -9223372036854775807L);
                j11 = X(xmlPullParser, "min", -9223372036854775807L);
                j12 = X(xmlPullParser, "max", -9223372036854775807L);
            } else if (y0.f(xmlPullParser, "PlaybackRate")) {
                f10 = R(xmlPullParser, "min", -3.4028235E38f);
                f11 = R(xmlPullParser, "max", -3.4028235E38f);
            }
            long j13 = j10;
            long j14 = j11;
            long j15 = j12;
            float f12 = f10;
            float f13 = f11;
            if (y0.d(xmlPullParser, "ServiceDescription")) {
                return new l(j13, j14, j15, f12, f13);
            }
            j10 = j13;
            j11 = j14;
            j12 = j15;
            f10 = f12;
            f11 = f13;
        }
    }

    protected Pair t0(List list) {
        String str;
        for (int i10 = 0; i10 < list.size(); i10++) {
            e eVar = (e) list.get(i10);
            if ((ii.b.a("http://dashif.org/thumbnail_tile", eVar.f50191a) || ii.b.a("http://dashif.org/guidelines/thumbnail_tile", eVar.f50191a)) && (str = eVar.f50192b) != null) {
                String[] d12 = w0.d1(str, "x");
                if (d12.length == 2) {
                    try {
                        return Pair.create(Integer.valueOf(Integer.parseInt(d12[0])), Integer.valueOf(Integer.parseInt(d12[1])));
                    } catch (NumberFormatException unused) {
                        continue;
                    }
                }
            }
        }
        return null;
    }

    protected int u0(String str) {
        if (str == null) {
            return 0;
        }
        char c10 = 65535;
        switch (str.hashCode()) {
            case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                if (str.equals("1")) {
                    c10 = 0;
                    break;
                }
                break;
            case 50:
                if (str.equals("2")) {
                    c10 = 1;
                    break;
                }
                break;
            case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                if (str.equals("3")) {
                    c10 = 2;
                    break;
                }
                break;
            case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                if (str.equals("4")) {
                    c10 = 3;
                    break;
                }
                break;
            case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                if (str.equals("6")) {
                    c10 = 4;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                return IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
            case 1:
                return RecyclerView.ItemAnimator.FLAG_MOVED;
            case 2:
                return 4;
            case 3:
                return 8;
            case 4:
                return 1;
            default:
                return 0;
        }
    }

    protected n v0(XmlPullParser xmlPullParser, String str, n nVar) {
        String attributeValue = xmlPullParser.getAttributeValue(null, str);
        if (attributeValue != null) {
            return n.b(attributeValue);
        }
        return nVar;
    }

    protected o w0(XmlPullParser xmlPullParser) {
        return o(xmlPullParser.getAttributeValue(null, "schemeIdUri"), xmlPullParser.getAttributeValue(null, "value"));
    }

    @Override // com.google.android.exoplayer2.upstream.j.a
    /* renamed from: x */
    public c a(Uri uri, InputStream inputStream) {
        try {
            XmlPullParser newPullParser = this.f50181a.newPullParser();
            newPullParser.setInput(inputStream, null);
            if (newPullParser.next() == 2 && "MPD".equals(newPullParser.getName())) {
                return Y(newPullParser, uri);
            }
            throw l0.c("inputStream does not contain a valid media presentation description", null);
        } catch (XmlPullParserException e10) {
            throw l0.c(null, e10);
        }
    }

    protected ud.a y(XmlPullParser xmlPullParser, List list, k kVar, long j10, long j11, long j12, long j13, long j14, boolean z10) {
        ArrayList arrayList;
        int i10;
        String str;
        String str2;
        ArrayList arrayList2;
        k.e eVar;
        ArrayList arrayList3;
        long j15;
        float f10;
        ArrayList arrayList4;
        int i11;
        ArrayList arrayList5;
        ArrayList arrayList6;
        ArrayList arrayList7;
        long j16;
        int i12;
        ArrayList arrayList8;
        int i13;
        ArrayList arrayList9;
        ArrayList arrayList10;
        ArrayList arrayList11;
        long j17;
        ArrayList arrayList12;
        String str3;
        ArrayList arrayList13;
        long j18;
        long j19;
        XmlPullParser xmlPullParser2;
        ArrayList arrayList14;
        int i14;
        d dVar;
        long j20;
        float f11;
        d dVar2 = this;
        XmlPullParser xmlPullParser3 = xmlPullParser;
        long X = X(xmlPullParser3, StackTraceHelper.ID_KEY, -1L);
        int G = G(xmlPullParser);
        String attributeValue = xmlPullParser3.getAttributeValue(null, "mimeType");
        String attributeValue2 = xmlPullParser3.getAttributeValue(null, "codecs");
        int U = U(xmlPullParser3, "width", -1);
        int U2 = U(xmlPullParser3, "height", -1);
        float S = S(xmlPullParser3, -1.0f);
        int U3 = U(xmlPullParser3, "audioSamplingRate", -1);
        String str4 = "lang";
        String attributeValue3 = xmlPullParser3.getAttributeValue(null, "lang");
        String attributeValue4 = xmlPullParser3.getAttributeValue(null, "label");
        ArrayList arrayList15 = new ArrayList();
        ArrayList arrayList16 = new ArrayList();
        ArrayList arrayList17 = new ArrayList();
        ArrayList arrayList18 = new ArrayList();
        ArrayList arrayList19 = new ArrayList();
        ArrayList arrayList20 = arrayList16;
        ArrayList arrayList21 = new ArrayList();
        ArrayList arrayList22 = new ArrayList();
        ArrayList arrayList23 = new ArrayList();
        String str5 = attributeValue2;
        int i15 = G;
        long j21 = j12;
        ArrayList arrayList24 = arrayList22;
        int i16 = U;
        int i17 = U2;
        float f12 = S;
        String str6 = attributeValue4;
        String str7 = attributeValue3;
        boolean z11 = false;
        int i18 = -1;
        String str8 = null;
        k kVar2 = kVar;
        String str9 = attributeValue;
        long j22 = j11;
        while (true) {
            xmlPullParser3.next();
            float f13 = f12;
            if (y0.f(xmlPullParser3, "BaseURL")) {
                if (!z11) {
                    j22 = dVar2.B(xmlPullParser3, j22);
                    z11 = true;
                }
                long j23 = j22;
                arrayList23.addAll(dVar2.C(xmlPullParser3, list, z10));
                arrayList = arrayList23;
                str2 = str4;
                arrayList2 = arrayList15;
                arrayList10 = arrayList21;
                eVar = kVar2;
                arrayList9 = arrayList24;
                arrayList11 = arrayList20;
                f10 = f13;
                arrayList4 = arrayList19;
                i12 = U3;
                arrayList8 = arrayList18;
                arrayList5 = arrayList17;
                j16 = j23;
            } else {
                long j24 = j22;
                if (y0.f(xmlPullParser3, "ContentProtection")) {
                    Pair F = F(xmlPullParser);
                    Object obj = F.first;
                    if (obj != null) {
                        str8 = (String) obj;
                    }
                    Object obj2 = F.second;
                    if (obj2 != null) {
                        arrayList15.add((m.b) obj2);
                    }
                    arrayList = arrayList23;
                    str2 = str4;
                    arrayList2 = arrayList15;
                    arrayList10 = arrayList21;
                    eVar = kVar2;
                    arrayList9 = arrayList24;
                    arrayList11 = arrayList20;
                } else {
                    if (y0.f(xmlPullParser3, "ContentComponent")) {
                        String q10 = q(str7, xmlPullParser3.getAttributeValue(null, str4));
                        i15 = p(i15, G(xmlPullParser));
                        arrayList = arrayList23;
                        str7 = q10;
                    } else {
                        if (y0.f(xmlPullParser3, "Role")) {
                            arrayList18.add(I(xmlPullParser3, "Role"));
                        } else if (y0.f(xmlPullParser3, "AudioChannelConfiguration")) {
                            arrayList = arrayList23;
                            i18 = A(xmlPullParser);
                        } else if (y0.f(xmlPullParser3, "Accessibility")) {
                            arrayList17.add(I(xmlPullParser3, "Accessibility"));
                        } else if (y0.f(xmlPullParser3, "EssentialProperty")) {
                            arrayList19.add(I(xmlPullParser3, "EssentialProperty"));
                        } else if (y0.f(xmlPullParser3, "SupplementalProperty")) {
                            arrayList21.add(I(xmlPullParser3, "SupplementalProperty"));
                        } else {
                            if (y0.f(xmlPullParser3, "Representation")) {
                                arrayList = arrayList23;
                                int i19 = i15;
                                str2 = str4;
                                String str10 = str5;
                                String str11 = str7;
                                int i20 = i16;
                                if (!arrayList23.isEmpty()) {
                                    arrayList12 = arrayList;
                                    f11 = f13;
                                    arrayList2 = arrayList15;
                                    str3 = str9;
                                    arrayList13 = arrayList24;
                                    arrayList3 = arrayList20;
                                    j18 = j10;
                                    j19 = j13;
                                    xmlPullParser2 = xmlPullParser3;
                                    arrayList14 = arrayList19;
                                    i14 = i17;
                                    dVar = this;
                                    j20 = j14;
                                } else {
                                    arrayList12 = list;
                                    arrayList2 = arrayList15;
                                    str3 = str9;
                                    arrayList13 = arrayList24;
                                    arrayList3 = arrayList20;
                                    j18 = j10;
                                    j19 = j13;
                                    xmlPullParser2 = xmlPullParser3;
                                    arrayList14 = arrayList19;
                                    i14 = i17;
                                    dVar = this;
                                    j20 = j14;
                                    f11 = f13;
                                }
                                a e02 = dVar.e0(xmlPullParser2, arrayList12, str3, str10, i20, i14, f11, i18, U3, str11, arrayList18, arrayList17, arrayList14, arrayList21, kVar2, j19, j18, j24, j21, j20, z10);
                                str9 = str3;
                                i17 = i14;
                                str = str11;
                                arrayList8 = arrayList18;
                                arrayList4 = arrayList14;
                                eVar = kVar2;
                                f10 = f11;
                                arrayList5 = arrayList17;
                                arrayList6 = arrayList21;
                                j16 = j24;
                                str5 = str10;
                                i16 = i20;
                                i12 = U3;
                                j15 = j21;
                                i11 = i18;
                                i10 = p(i19, c0.k(e02.f50182a.f12706w));
                                arrayList7 = arrayList13;
                                arrayList7.add(e02);
                                xmlPullParser3 = xmlPullParser2;
                            } else {
                                arrayList = arrayList23;
                                i10 = i15;
                                str = str7;
                                str2 = str4;
                                arrayList2 = arrayList15;
                                eVar = kVar2;
                                arrayList3 = arrayList20;
                                j15 = j21;
                                f10 = f13;
                                XmlPullParser xmlPullParser4 = xmlPullParser3;
                                arrayList4 = arrayList19;
                                i11 = i18;
                                arrayList5 = arrayList17;
                                arrayList6 = arrayList21;
                                arrayList7 = arrayList24;
                                j16 = j24;
                                i12 = U3;
                                arrayList8 = arrayList18;
                                if (y0.f(xmlPullParser4, "SegmentBase")) {
                                    xmlPullParser3 = xmlPullParser4;
                                    eVar = j0(xmlPullParser4, (k.e) eVar);
                                } else if (y0.f(xmlPullParser4, "SegmentList")) {
                                    long B = B(xmlPullParser4, j15);
                                    arrayList9 = arrayList7;
                                    xmlPullParser3 = xmlPullParser;
                                    eVar = k0(xmlPullParser3, (k.b) eVar, j13, j10, j16, B, j14);
                                    arrayList10 = arrayList6;
                                    str7 = str;
                                    i15 = i10;
                                    arrayList11 = arrayList3;
                                    j17 = B;
                                    i18 = i11;
                                    j21 = j17;
                                } else {
                                    i13 = i10;
                                    xmlPullParser3 = xmlPullParser4;
                                    arrayList9 = arrayList7;
                                    if (y0.f(xmlPullParser3, "SegmentTemplate")) {
                                        long B2 = B(xmlPullParser3, j15);
                                        arrayList10 = arrayList6;
                                        k.c l02 = l0(xmlPullParser3, (k.c) eVar, arrayList10, j13, j10, j16, B2, j14);
                                        j16 = j16;
                                        eVar = l02;
                                        str7 = str;
                                        i18 = i11;
                                        i15 = i13;
                                        arrayList11 = arrayList3;
                                        j21 = B2;
                                    } else {
                                        arrayList10 = arrayList6;
                                        if (y0.f(xmlPullParser3, "InbandEventStream")) {
                                            arrayList11 = arrayList3;
                                            arrayList11.add(I(xmlPullParser3, "InbandEventStream"));
                                        } else {
                                            arrayList11 = arrayList3;
                                            if (y0.f(xmlPullParser3, "Label")) {
                                                str6 = V(xmlPullParser);
                                            } else if (y0.e(xmlPullParser3)) {
                                                z(xmlPullParser);
                                            }
                                        }
                                        i18 = i11;
                                        j17 = j15;
                                        str7 = str;
                                        i15 = i13;
                                        j21 = j17;
                                    }
                                }
                            }
                            arrayList9 = arrayList7;
                            arrayList10 = arrayList6;
                            i18 = i11;
                            arrayList11 = arrayList3;
                            j21 = j15;
                            str7 = str;
                            i15 = i10;
                        }
                        arrayList = arrayList23;
                        str = str7;
                        str2 = str4;
                        arrayList2 = arrayList15;
                        arrayList10 = arrayList21;
                        eVar = kVar2;
                        arrayList9 = arrayList24;
                        arrayList11 = arrayList20;
                        f10 = f13;
                        arrayList4 = arrayList19;
                        i12 = U3;
                        arrayList8 = arrayList18;
                        arrayList5 = arrayList17;
                        j16 = j24;
                        long j25 = j21;
                        i13 = i15;
                        i11 = i18;
                        j15 = j25;
                        i18 = i11;
                        j17 = j15;
                        str7 = str;
                        i15 = i13;
                        j21 = j17;
                    }
                    str2 = str4;
                    arrayList2 = arrayList15;
                    arrayList10 = arrayList21;
                    eVar = kVar2;
                    arrayList9 = arrayList24;
                    arrayList11 = arrayList20;
                }
                f10 = f13;
                arrayList4 = arrayList19;
                i12 = U3;
                arrayList8 = arrayList18;
                arrayList5 = arrayList17;
                j16 = j24;
            }
            if (y0.d(xmlPullParser3, "AdaptationSet")) {
                break;
            }
            dVar2 = this;
            U3 = i12;
            arrayList17 = arrayList5;
            arrayList18 = arrayList8;
            str4 = str2;
            arrayList24 = arrayList9;
            arrayList21 = arrayList10;
            kVar2 = eVar;
            j22 = j16;
            f12 = f10;
            arrayList19 = arrayList4;
            arrayList15 = arrayList2;
            arrayList20 = arrayList11;
            arrayList23 = arrayList;
        }
        ArrayList arrayList25 = new ArrayList(arrayList9.size());
        int i21 = 0;
        while (i21 < arrayList9.size()) {
            ArrayList arrayList26 = arrayList11;
            arrayList25.add(j((a) arrayList9.get(i21), str6, str8, arrayList2, arrayList26));
            i21++;
            arrayList11 = arrayList26;
        }
        return c(X, i15, arrayList25, arrayList5, arrayList4, arrayList10);
    }

    protected void z(XmlPullParser xmlPullParser) {
        w(xmlPullParser);
    }
}
