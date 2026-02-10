package zd;

import android.net.Uri;
import android.text.TextUtils;
import android.util.Base64;
import android.util.Pair;
import cd.l;
import cd.p;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.k;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.UUID;
import mc.l0;
import oe.w0;
import org.webrtc.MediaStreamTrack;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
import org.xmlpull.v1.XmlPullParserFactory;
import sc.m;
import zd.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b implements k.a {

    /* renamed from: a  reason: collision with root package name */
    private final XmlPullParserFactory f56386a;

    /* renamed from: zd.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0800b extends l0 {
        public C0800b(String str) {
            super("Missing required field: " + str, null, true, 4);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c extends a {

        /* renamed from: e  reason: collision with root package name */
        private boolean f56391e;

        /* renamed from: f  reason: collision with root package name */
        private UUID f56392f;

        /* renamed from: g  reason: collision with root package name */
        private byte[] f56393g;

        public c(a aVar, String str) {
            super(aVar, str, "Protection");
        }

        private static p[] q(byte[] bArr) {
            return new p[]{new p(true, null, 8, r(bArr), 0, 0, null)};
        }

        private static byte[] r(byte[] bArr) {
            StringBuilder sb2 = new StringBuilder();
            for (int i10 = 0; i10 < bArr.length; i10 += 2) {
                sb2.append((char) bArr[i10]);
            }
            String sb3 = sb2.toString();
            byte[] decode = Base64.decode(sb3.substring(sb3.indexOf("<KID>") + 5, sb3.indexOf("</KID>")), 0);
            t(decode, 0, 3);
            t(decode, 1, 2);
            t(decode, 4, 5);
            t(decode, 6, 7);
            return decode;
        }

        private static String s(String str) {
            if (str.charAt(0) == '{' && str.charAt(str.length() - 1) == '}') {
                return str.substring(1, str.length() - 1);
            }
            return str;
        }

        private static void t(byte[] bArr, int i10, int i11) {
            byte b10 = bArr[i10];
            bArr[i10] = bArr[i11];
            bArr[i11] = b10;
        }

        @Override // zd.b.a
        public Object b() {
            UUID uuid = this.f56392f;
            return new a.C0799a(uuid, l.a(uuid, this.f56393g), q(this.f56393g));
        }

        @Override // zd.b.a
        public boolean d(String str) {
            return "ProtectionHeader".equals(str);
        }

        @Override // zd.b.a
        public void h(XmlPullParser xmlPullParser) {
            if ("ProtectionHeader".equals(xmlPullParser.getName())) {
                this.f56391e = false;
            }
        }

        @Override // zd.b.a
        public void n(XmlPullParser xmlPullParser) {
            if ("ProtectionHeader".equals(xmlPullParser.getName())) {
                this.f56391e = true;
                this.f56392f = UUID.fromString(s(xmlPullParser.getAttributeValue(null, "SystemID")));
            }
        }

        @Override // zd.b.a
        public void o(XmlPullParser xmlPullParser) {
            if (this.f56391e) {
                this.f56393g = Base64.decode(xmlPullParser.getText(), 0);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class d extends a {

        /* renamed from: e  reason: collision with root package name */
        private Format f56394e;

        public d(a aVar, String str) {
            super(aVar, str, "QualityLevel");
        }

        private static List q(String str) {
            ArrayList arrayList = new ArrayList();
            if (!TextUtils.isEmpty(str)) {
                byte[] K = w0.K(str);
                byte[][] i10 = oe.f.i(K);
                if (i10 == null) {
                    arrayList.add(K);
                    return arrayList;
                }
                Collections.addAll(arrayList, i10);
            }
            return arrayList;
        }

        private static String r(String str) {
            if (!str.equalsIgnoreCase("H264") && !str.equalsIgnoreCase("X264") && !str.equalsIgnoreCase("AVC1") && !str.equalsIgnoreCase("DAVC")) {
                if (!str.equalsIgnoreCase("AAC") && !str.equalsIgnoreCase("AACL") && !str.equalsIgnoreCase("AACH") && !str.equalsIgnoreCase("AACP")) {
                    if (!str.equalsIgnoreCase("TTML") && !str.equalsIgnoreCase("DFXP")) {
                        if (!str.equalsIgnoreCase("ac-3") && !str.equalsIgnoreCase("dac3")) {
                            if (!str.equalsIgnoreCase("ec-3") && !str.equalsIgnoreCase("dec3")) {
                                if (str.equalsIgnoreCase("dtsc")) {
                                    return "audio/vnd.dts";
                                }
                                if (!str.equalsIgnoreCase("dtsh") && !str.equalsIgnoreCase("dtsl")) {
                                    if (str.equalsIgnoreCase("dtse")) {
                                        return "audio/vnd.dts.hd;profile=lbr";
                                    }
                                    if (str.equalsIgnoreCase("opus")) {
                                        return "audio/opus";
                                    }
                                    return null;
                                }
                                return "audio/vnd.dts.hd";
                            }
                            return "audio/eac3";
                        }
                        return "audio/ac3";
                    }
                    return "application/ttml+xml";
                }
                return "audio/mp4a-latm";
            }
            return "video/avc";
        }

        @Override // zd.b.a
        public Object b() {
            return this.f56394e;
        }

        @Override // zd.b.a
        public void n(XmlPullParser xmlPullParser) {
            int i10;
            Format.b bVar = new Format.b();
            String r10 = r(m(xmlPullParser, "FourCC"));
            int intValue = ((Integer) c("Type")).intValue();
            if (intValue == 2) {
                bVar.M("video/mp4").n0(k(xmlPullParser, "MaxWidth")).S(k(xmlPullParser, "MaxHeight")).V(q(xmlPullParser.getAttributeValue(null, "CodecPrivateData")));
            } else if (intValue == 1) {
                if (r10 == null) {
                    r10 = "audio/mp4a-latm";
                }
                int k10 = k(xmlPullParser, "Channels");
                int k11 = k(xmlPullParser, "SamplingRate");
                List q10 = q(xmlPullParser.getAttributeValue(null, "CodecPrivateData"));
                if (q10.isEmpty() && "audio/mp4a-latm".equals(r10)) {
                    q10 = Collections.singletonList(oc.a.a(k11, k10));
                }
                bVar.M("audio/mp4").J(k10).h0(k11).V(q10);
            } else if (intValue == 3) {
                String str = (String) c("Subtype");
                if (str != null) {
                    if (!str.equals("CAPT")) {
                        if (str.equals("DESC")) {
                            i10 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        }
                    } else {
                        i10 = 64;
                    }
                    bVar.M("application/mp4").e0(i10);
                }
                i10 = 0;
                bVar.M("application/mp4").e0(i10);
            } else {
                bVar.M("application/mp4");
            }
            this.f56394e = bVar.U(xmlPullParser.getAttributeValue(null, "Index")).W((String) c("Name")).g0(r10).I(k(xmlPullParser, "Bitrate")).X((String) c("Language")).G();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e extends a {

        /* renamed from: e  reason: collision with root package name */
        private final List f56395e;

        /* renamed from: f  reason: collision with root package name */
        private int f56396f;

        /* renamed from: g  reason: collision with root package name */
        private int f56397g;

        /* renamed from: h  reason: collision with root package name */
        private long f56398h;

        /* renamed from: i  reason: collision with root package name */
        private long f56399i;

        /* renamed from: j  reason: collision with root package name */
        private long f56400j;

        /* renamed from: k  reason: collision with root package name */
        private int f56401k;

        /* renamed from: l  reason: collision with root package name */
        private boolean f56402l;

        /* renamed from: m  reason: collision with root package name */
        private a.C0799a f56403m;

        public e(a aVar, String str) {
            super(aVar, str, "SmoothStreamingMedia");
            this.f56401k = -1;
            this.f56403m = null;
            this.f56395e = new LinkedList();
        }

        @Override // zd.b.a
        public void a(Object obj) {
            boolean z10;
            if (obj instanceof a.b) {
                this.f56395e.add((a.b) obj);
            } else if (obj instanceof a.C0799a) {
                if (this.f56403m == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                oe.a.g(z10);
                this.f56403m = (a.C0799a) obj;
            }
        }

        @Override // zd.b.a
        public Object b() {
            int size = this.f56395e.size();
            a.b[] bVarArr = new a.b[size];
            this.f56395e.toArray(bVarArr);
            if (this.f56403m != null) {
                a.C0799a c0799a = this.f56403m;
                m mVar = new m(new m.b(c0799a.f56367a, "video/mp4", c0799a.f56368b));
                for (int i10 = 0; i10 < size; i10++) {
                    a.b bVar = bVarArr[i10];
                    int i11 = bVar.f56370a;
                    if (i11 == 2 || i11 == 1) {
                        Format[] formatArr = bVar.f56379j;
                        for (int i12 = 0; i12 < formatArr.length; i12++) {
                            formatArr[i12] = formatArr[i12].b().O(mVar).G();
                        }
                    }
                }
            }
            return new zd.a(this.f56396f, this.f56397g, this.f56398h, this.f56399i, this.f56400j, this.f56401k, this.f56402l, this.f56403m, bVarArr);
        }

        @Override // zd.b.a
        public void n(XmlPullParser xmlPullParser) {
            this.f56396f = k(xmlPullParser, "MajorVersion");
            this.f56397g = k(xmlPullParser, "MinorVersion");
            this.f56398h = j(xmlPullParser, "TimeScale", 10000000L);
            this.f56399i = l(xmlPullParser, "Duration");
            this.f56400j = j(xmlPullParser, "DVRWindowLength", 0L);
            this.f56401k = i(xmlPullParser, "LookaheadCount", -1);
            this.f56402l = g(xmlPullParser, "IsLive", false);
            p("TimeScale", Long.valueOf(this.f56398h));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class f extends a {

        /* renamed from: e  reason: collision with root package name */
        private final String f56404e;

        /* renamed from: f  reason: collision with root package name */
        private final List f56405f;

        /* renamed from: g  reason: collision with root package name */
        private int f56406g;

        /* renamed from: h  reason: collision with root package name */
        private String f56407h;

        /* renamed from: i  reason: collision with root package name */
        private long f56408i;

        /* renamed from: j  reason: collision with root package name */
        private String f56409j;

        /* renamed from: k  reason: collision with root package name */
        private String f56410k;

        /* renamed from: l  reason: collision with root package name */
        private int f56411l;

        /* renamed from: m  reason: collision with root package name */
        private int f56412m;

        /* renamed from: n  reason: collision with root package name */
        private int f56413n;

        /* renamed from: o  reason: collision with root package name */
        private int f56414o;

        /* renamed from: p  reason: collision with root package name */
        private String f56415p;

        /* renamed from: q  reason: collision with root package name */
        private ArrayList f56416q;

        /* renamed from: r  reason: collision with root package name */
        private long f56417r;

        public f(a aVar, String str) {
            super(aVar, str, "StreamIndex");
            this.f56404e = str;
            this.f56405f = new LinkedList();
        }

        private void q(XmlPullParser xmlPullParser) {
            int s10 = s(xmlPullParser);
            this.f56406g = s10;
            p("Type", Integer.valueOf(s10));
            if (this.f56406g == 3) {
                this.f56407h = m(xmlPullParser, "Subtype");
            } else {
                this.f56407h = xmlPullParser.getAttributeValue(null, "Subtype");
            }
            p("Subtype", this.f56407h);
            String attributeValue = xmlPullParser.getAttributeValue(null, "Name");
            this.f56409j = attributeValue;
            p("Name", attributeValue);
            this.f56410k = m(xmlPullParser, "Url");
            this.f56411l = i(xmlPullParser, "MaxWidth", -1);
            this.f56412m = i(xmlPullParser, "MaxHeight", -1);
            this.f56413n = i(xmlPullParser, "DisplayWidth", -1);
            this.f56414o = i(xmlPullParser, "DisplayHeight", -1);
            String attributeValue2 = xmlPullParser.getAttributeValue(null, "Language");
            this.f56415p = attributeValue2;
            p("Language", attributeValue2);
            long i10 = i(xmlPullParser, "TimeScale", -1);
            this.f56408i = i10;
            if (i10 == -1) {
                this.f56408i = ((Long) c("TimeScale")).longValue();
            }
            this.f56416q = new ArrayList();
        }

        private void r(XmlPullParser xmlPullParser) {
            int size = this.f56416q.size();
            long j10 = j(xmlPullParser, "t", -9223372036854775807L);
            int i10 = 1;
            if (j10 == -9223372036854775807L) {
                if (size == 0) {
                    j10 = 0;
                } else if (this.f56417r != -1) {
                    j10 = this.f56417r + ((Long) this.f56416q.get(size - 1)).longValue();
                } else {
                    throw l0.c("Unable to infer start time", null);
                }
            }
            this.f56416q.add(Long.valueOf(j10));
            this.f56417r = j(xmlPullParser, "d", -9223372036854775807L);
            long j11 = j(xmlPullParser, "r", 1L);
            if (j11 > 1 && this.f56417r == -9223372036854775807L) {
                throw l0.c("Repeated chunk with unspecified duration", null);
            }
            while (true) {
                long j12 = i10;
                if (j12 < j11) {
                    this.f56416q.add(Long.valueOf((this.f56417r * j12) + j10));
                    i10++;
                } else {
                    return;
                }
            }
        }

        private int s(XmlPullParser xmlPullParser) {
            String attributeValue = xmlPullParser.getAttributeValue(null, "Type");
            if (attributeValue != null) {
                if (MediaStreamTrack.AUDIO_TRACK_KIND.equalsIgnoreCase(attributeValue)) {
                    return 1;
                }
                if (MediaStreamTrack.VIDEO_TRACK_KIND.equalsIgnoreCase(attributeValue)) {
                    return 2;
                }
                if ("text".equalsIgnoreCase(attributeValue)) {
                    return 3;
                }
                throw l0.c("Invalid key value[" + attributeValue + "]", null);
            }
            throw new C0800b("Type");
        }

        @Override // zd.b.a
        public void a(Object obj) {
            if (obj instanceof Format) {
                this.f56405f.add((Format) obj);
            }
        }

        @Override // zd.b.a
        public Object b() {
            Format[] formatArr = new Format[this.f56405f.size()];
            this.f56405f.toArray(formatArr);
            return new a.b(this.f56404e, this.f56410k, this.f56406g, this.f56407h, this.f56408i, this.f56409j, this.f56411l, this.f56412m, this.f56413n, this.f56414o, this.f56415p, formatArr, this.f56416q, this.f56417r);
        }

        @Override // zd.b.a
        public boolean d(String str) {
            return "c".equals(str);
        }

        @Override // zd.b.a
        public void n(XmlPullParser xmlPullParser) {
            if ("c".equals(xmlPullParser.getName())) {
                r(xmlPullParser);
            } else {
                q(xmlPullParser);
            }
        }
    }

    public b() {
        try {
            this.f56386a = XmlPullParserFactory.newInstance();
        } catch (XmlPullParserException e10) {
            throw new RuntimeException("Couldn't create XmlPullParserFactory instance", e10);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.k.a
    /* renamed from: b */
    public zd.a a(Uri uri, InputStream inputStream) {
        try {
            XmlPullParser newPullParser = this.f56386a.newPullParser();
            newPullParser.setInput(inputStream, null);
            return (zd.a) new e(null, uri.toString()).f(newPullParser);
        } catch (XmlPullParserException e10) {
            throw l0.c(null, e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f56387a;

        /* renamed from: b  reason: collision with root package name */
        private final String f56388b;

        /* renamed from: c  reason: collision with root package name */
        private final a f56389c;

        /* renamed from: d  reason: collision with root package name */
        private final List f56390d = new LinkedList();

        public a(a aVar, String str, String str2) {
            this.f56389c = aVar;
            this.f56387a = str;
            this.f56388b = str2;
        }

        private a e(a aVar, String str, String str2) {
            if ("QualityLevel".equals(str)) {
                return new d(aVar, str2);
            }
            if ("Protection".equals(str)) {
                return new c(aVar, str2);
            }
            if ("StreamIndex".equals(str)) {
                return new f(aVar, str2);
            }
            return null;
        }

        protected abstract Object b();

        protected final Object c(String str) {
            for (int i10 = 0; i10 < this.f56390d.size(); i10++) {
                Pair pair = (Pair) this.f56390d.get(i10);
                if (((String) pair.first).equals(str)) {
                    return pair.second;
                }
            }
            a aVar = this.f56389c;
            if (aVar == null) {
                return null;
            }
            return aVar.c(str);
        }

        protected boolean d(String str) {
            return false;
        }

        public final Object f(XmlPullParser xmlPullParser) {
            boolean z10 = false;
            int i10 = 0;
            while (true) {
                int eventType = xmlPullParser.getEventType();
                if (eventType != 1) {
                    if (eventType != 2) {
                        if (eventType != 3) {
                            if (eventType == 4 && z10 && i10 == 0) {
                                o(xmlPullParser);
                            }
                        } else if (!z10) {
                            continue;
                        } else if (i10 > 0) {
                            i10--;
                        } else {
                            String name = xmlPullParser.getName();
                            h(xmlPullParser);
                            if (!d(name)) {
                                return b();
                            }
                        }
                    } else {
                        String name2 = xmlPullParser.getName();
                        if (this.f56388b.equals(name2)) {
                            n(xmlPullParser);
                            z10 = true;
                        } else if (z10) {
                            if (i10 > 0) {
                                i10++;
                            } else if (d(name2)) {
                                n(xmlPullParser);
                            } else {
                                a e10 = e(this, name2, this.f56387a);
                                if (e10 == null) {
                                    i10 = 1;
                                } else {
                                    a(e10.f(xmlPullParser));
                                }
                            }
                        }
                    }
                    xmlPullParser.next();
                } else {
                    return null;
                }
            }
        }

        protected final boolean g(XmlPullParser xmlPullParser, String str, boolean z10) {
            String attributeValue = xmlPullParser.getAttributeValue(null, str);
            if (attributeValue != null) {
                return Boolean.parseBoolean(attributeValue);
            }
            return z10;
        }

        protected final int i(XmlPullParser xmlPullParser, String str, int i10) {
            String attributeValue = xmlPullParser.getAttributeValue(null, str);
            if (attributeValue != null) {
                try {
                    return Integer.parseInt(attributeValue);
                } catch (NumberFormatException e10) {
                    throw l0.c(null, e10);
                }
            }
            return i10;
        }

        protected final long j(XmlPullParser xmlPullParser, String str, long j10) {
            String attributeValue = xmlPullParser.getAttributeValue(null, str);
            if (attributeValue != null) {
                try {
                    return Long.parseLong(attributeValue);
                } catch (NumberFormatException e10) {
                    throw l0.c(null, e10);
                }
            }
            return j10;
        }

        protected final int k(XmlPullParser xmlPullParser, String str) {
            String attributeValue = xmlPullParser.getAttributeValue(null, str);
            if (attributeValue != null) {
                try {
                    return Integer.parseInt(attributeValue);
                } catch (NumberFormatException e10) {
                    throw l0.c(null, e10);
                }
            }
            throw new C0800b(str);
        }

        protected final long l(XmlPullParser xmlPullParser, String str) {
            String attributeValue = xmlPullParser.getAttributeValue(null, str);
            if (attributeValue != null) {
                try {
                    return Long.parseLong(attributeValue);
                } catch (NumberFormatException e10) {
                    throw l0.c(null, e10);
                }
            }
            throw new C0800b(str);
        }

        protected final String m(XmlPullParser xmlPullParser, String str) {
            String attributeValue = xmlPullParser.getAttributeValue(null, str);
            if (attributeValue != null) {
                return attributeValue;
            }
            throw new C0800b(str);
        }

        protected abstract void n(XmlPullParser xmlPullParser);

        protected final void p(String str, Object obj) {
            this.f56390d.add(Pair.create(str, obj));
        }

        protected void a(Object obj) {
        }

        protected void h(XmlPullParser xmlPullParser) {
        }

        protected void o(XmlPullParser xmlPullParser) {
        }
    }
}
