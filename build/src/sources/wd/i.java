package wd;

import android.net.Uri;
import android.text.TextUtils;
import android.util.Base64;
import androidx.recyclerview.widget.RecyclerView;
import bd.l;
import com.facebook.react.animated.InterpolationAnimatedNode;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import com.google.android.exoplayer2.upstream.j;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Queue;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lc.l0;
import ne.c0;
import ne.u0;
import ne.w0;
import ne.y;
import rc.m;
import vd.q;
import wd.f;
import wd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i implements j.a {

    /* renamed from: a  reason: collision with root package name */
    private final g f52003a;

    /* renamed from: b  reason: collision with root package name */
    private final f f52004b;

    /* renamed from: c  reason: collision with root package name */
    private static final Pattern f51979c = Pattern.compile("AVERAGE-BANDWIDTH=(\\d+)\\b");

    /* renamed from: d  reason: collision with root package name */
    private static final Pattern f51980d = Pattern.compile("VIDEO=\"(.+?)\"");

    /* renamed from: e  reason: collision with root package name */
    private static final Pattern f51981e = Pattern.compile("AUDIO=\"(.+?)\"");

    /* renamed from: f  reason: collision with root package name */
    private static final Pattern f51982f = Pattern.compile("SUBTITLES=\"(.+?)\"");

    /* renamed from: g  reason: collision with root package name */
    private static final Pattern f51983g = Pattern.compile("CLOSED-CAPTIONS=\"(.+?)\"");

    /* renamed from: h  reason: collision with root package name */
    private static final Pattern f51984h = Pattern.compile("[^-]BANDWIDTH=(\\d+)\\b");

    /* renamed from: i  reason: collision with root package name */
    private static final Pattern f51985i = Pattern.compile("CHANNELS=\"(.+?)\"");

    /* renamed from: j  reason: collision with root package name */
    private static final Pattern f51986j = Pattern.compile("CODECS=\"(.+?)\"");

    /* renamed from: k  reason: collision with root package name */
    private static final Pattern f51987k = Pattern.compile("RESOLUTION=(\\d+x\\d+)");

    /* renamed from: l  reason: collision with root package name */
    private static final Pattern f51988l = Pattern.compile("FRAME-RATE=([\\d\\.]+)\\b");

    /* renamed from: m  reason: collision with root package name */
    private static final Pattern f51989m = Pattern.compile("#EXT-X-TARGETDURATION:(\\d+)\\b");

    /* renamed from: n  reason: collision with root package name */
    private static final Pattern f51990n = Pattern.compile("DURATION=([\\d\\.]+)\\b");

    /* renamed from: o  reason: collision with root package name */
    private static final Pattern f51991o = Pattern.compile("PART-TARGET=([\\d\\.]+)\\b");

    /* renamed from: p  reason: collision with root package name */
    private static final Pattern f51992p = Pattern.compile("#EXT-X-VERSION:(\\d+)\\b");

    /* renamed from: q  reason: collision with root package name */
    private static final Pattern f51993q = Pattern.compile("#EXT-X-PLAYLIST-TYPE:(.+)\\b");

    /* renamed from: r  reason: collision with root package name */
    private static final Pattern f51994r = Pattern.compile("CAN-SKIP-UNTIL=([\\d\\.]+)\\b");

    /* renamed from: s  reason: collision with root package name */
    private static final Pattern f51995s = c("CAN-SKIP-DATERANGES");

    /* renamed from: t  reason: collision with root package name */
    private static final Pattern f51996t = Pattern.compile("SKIPPED-SEGMENTS=(\\d+)\\b");

    /* renamed from: u  reason: collision with root package name */
    private static final Pattern f51997u = Pattern.compile("[:|,]HOLD-BACK=([\\d\\.]+)\\b");

    /* renamed from: v  reason: collision with root package name */
    private static final Pattern f51998v = Pattern.compile("PART-HOLD-BACK=([\\d\\.]+)\\b");

    /* renamed from: w  reason: collision with root package name */
    private static final Pattern f51999w = c("CAN-BLOCK-RELOAD");

    /* renamed from: x  reason: collision with root package name */
    private static final Pattern f52000x = Pattern.compile("#EXT-X-MEDIA-SEQUENCE:(\\d+)\\b");

    /* renamed from: y  reason: collision with root package name */
    private static final Pattern f52001y = Pattern.compile("#EXTINF:([\\d\\.]+)\\b");

    /* renamed from: z  reason: collision with root package name */
    private static final Pattern f52002z = Pattern.compile("#EXTINF:[\\d\\.]+\\b,(.+)");
    private static final Pattern A = Pattern.compile("LAST-MSN=(\\d+)\\b");
    private static final Pattern B = Pattern.compile("LAST-PART=(\\d+)\\b");
    private static final Pattern C = Pattern.compile("TIME-OFFSET=(-?[\\d\\.]+)\\b");
    private static final Pattern D = Pattern.compile("#EXT-X-BYTERANGE:(\\d+(?:@\\d+)?)\\b");
    private static final Pattern E = Pattern.compile("BYTERANGE=\"(\\d+(?:@\\d+)?)\\b\"");
    private static final Pattern F = Pattern.compile("BYTERANGE-START=(\\d+)\\b");
    private static final Pattern G = Pattern.compile("BYTERANGE-LENGTH=(\\d+)\\b");
    private static final Pattern H = Pattern.compile("METHOD=(NONE|AES-128|SAMPLE-AES|SAMPLE-AES-CENC|SAMPLE-AES-CTR)\\s*(?:,|$)");
    private static final Pattern I = Pattern.compile("KEYFORMAT=\"(.+?)\"");
    private static final Pattern J = Pattern.compile("KEYFORMATVERSIONS=\"(.+?)\"");
    private static final Pattern K = Pattern.compile("URI=\"(.+?)\"");
    private static final Pattern L = Pattern.compile("IV=([^,.*]+)");
    private static final Pattern M = Pattern.compile("TYPE=(AUDIO|VIDEO|SUBTITLES|CLOSED-CAPTIONS)");
    private static final Pattern N = Pattern.compile("TYPE=(PART|MAP)");
    private static final Pattern O = Pattern.compile("LANGUAGE=\"(.+?)\"");
    private static final Pattern P = Pattern.compile("NAME=\"(.+?)\"");
    private static final Pattern Q = Pattern.compile("GROUP-ID=\"(.+?)\"");
    private static final Pattern R = Pattern.compile("CHARACTERISTICS=\"(.+?)\"");
    private static final Pattern S = Pattern.compile("INSTREAM-ID=\"((?:CC|SERVICE)\\d+)\"");
    private static final Pattern T = c("AUTOSELECT");
    private static final Pattern U = c("DEFAULT");
    private static final Pattern V = c("FORCED");
    private static final Pattern W = c("INDEPENDENT");
    private static final Pattern X = c("GAP");
    private static final Pattern Y = c("PRECISE");
    private static final Pattern Z = Pattern.compile("VALUE=\"(.+?)\"");

    /* renamed from: a0  reason: collision with root package name */
    private static final Pattern f51977a0 = Pattern.compile("IMPORT=\"(.+?)\"");

    /* renamed from: b0  reason: collision with root package name */
    private static final Pattern f51978b0 = Pattern.compile("\\{\\$([a-zA-Z0-9\\-_]+)\\}");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends IOException {
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final BufferedReader f52005a;

        /* renamed from: b  reason: collision with root package name */
        private final Queue f52006b;

        /* renamed from: c  reason: collision with root package name */
        private String f52007c;

        public b(Queue queue, BufferedReader bufferedReader) {
            this.f52006b = queue;
            this.f52005a = bufferedReader;
        }

        public boolean a() {
            String trim;
            if (this.f52007c != null) {
                return true;
            }
            if (!this.f52006b.isEmpty()) {
                this.f52007c = (String) ne.a.e((String) this.f52006b.poll());
                return true;
            }
            do {
                String readLine = this.f52005a.readLine();
                this.f52007c = readLine;
                if (readLine != null) {
                    trim = readLine.trim();
                    this.f52007c = trim;
                } else {
                    return false;
                }
            } while (trim.isEmpty());
            return true;
        }

        public String b() {
            if (a()) {
                String str = this.f52007c;
                this.f52007c = null;
                return str;
            }
            throw new NoSuchElementException();
        }
    }

    public i() {
        this(g.f51953n, null);
    }

    private static long A(String str, Pattern pattern) {
        return new BigDecimal(z(str, pattern, Collections.EMPTY_MAP)).multiply(new BigDecimal(1000000L)).longValue();
    }

    private static String B(String str, Map map) {
        Matcher matcher = f51978b0.matcher(str);
        StringBuffer stringBuffer = new StringBuffer();
        while (matcher.find()) {
            String group = matcher.group(1);
            if (map.containsKey(group)) {
                matcher.appendReplacement(stringBuffer, Matcher.quoteReplacement((String) map.get(group)));
            }
        }
        matcher.appendTail(stringBuffer);
        return stringBuffer.toString();
    }

    private static int C(BufferedReader bufferedReader, boolean z10, int i10) {
        while (i10 != -1 && Character.isWhitespace(i10) && (z10 || !w0.F0(i10))) {
            i10 = bufferedReader.read();
        }
        return i10;
    }

    private static boolean b(BufferedReader bufferedReader) {
        int read = bufferedReader.read();
        if (read == 239) {
            if (bufferedReader.read() != 187 || bufferedReader.read() != 191) {
                return false;
            }
            read = bufferedReader.read();
        }
        int C2 = C(bufferedReader, true, read);
        for (int i10 = 0; i10 < 7; i10++) {
            if (C2 != "#EXTM3U".charAt(i10)) {
                return false;
            }
            C2 = bufferedReader.read();
        }
        return w0.F0(C(bufferedReader, false, C2));
    }

    private static Pattern c(String str) {
        return Pattern.compile(str + "=(NO|YES)");
    }

    private static m d(String str, m.b[] bVarArr) {
        m.b[] bVarArr2 = new m.b[bVarArr.length];
        for (int i10 = 0; i10 < bVarArr.length; i10++) {
            bVarArr2[i10] = bVarArr[i10].b(null);
        }
        return new m(str, bVarArr2);
    }

    private static String e(long j10, String str, String str2) {
        if (str == null) {
            return null;
        }
        if (str2 != null) {
            return str2;
        }
        return Long.toHexString(j10);
    }

    private static g.b f(ArrayList arrayList, String str) {
        for (int i10 = 0; i10 < arrayList.size(); i10++) {
            g.b bVar = (g.b) arrayList.get(i10);
            if (str.equals(bVar.f51971d)) {
                return bVar;
            }
        }
        return null;
    }

    private static g.b g(ArrayList arrayList, String str) {
        for (int i10 = 0; i10 < arrayList.size(); i10++) {
            g.b bVar = (g.b) arrayList.get(i10);
            if (str.equals(bVar.f51972e)) {
                return bVar;
            }
        }
        return null;
    }

    private static g.b h(ArrayList arrayList, String str) {
        for (int i10 = 0; i10 < arrayList.size(); i10++) {
            g.b bVar = (g.b) arrayList.get(i10);
            if (str.equals(bVar.f51970c)) {
                return bVar;
            }
        }
        return null;
    }

    private static double j(String str, Pattern pattern) {
        return Double.parseDouble(z(str, pattern, Collections.EMPTY_MAP));
    }

    private static m.b k(String str, String str2, Map map) {
        String u10 = u(str, J, "1", map);
        if ("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed".equals(str2)) {
            String z10 = z(str, K, map);
            return new m.b(lc.d.f37186d, "video/mp4", Base64.decode(z10.substring(z10.indexOf(44)), 0));
        } else if ("com.widevine".equals(str2)) {
            return new m.b(lc.d.f37186d, "hls", w0.s0(str));
        } else {
            if ("com.microsoft.playready".equals(str2) && "1".equals(u10)) {
                String z11 = z(str, K, map);
                byte[] decode = Base64.decode(z11.substring(z11.indexOf(44)), 0);
                UUID uuid = lc.d.f37187e;
                return new m.b(uuid, "video/mp4", l.a(uuid, decode));
            }
            return null;
        }
    }

    private static String l(String str) {
        if (!"SAMPLE-AES-CENC".equals(str) && !"SAMPLE-AES-CTR".equals(str)) {
            return "cbcs";
        }
        return "cenc";
    }

    private static int m(String str, Pattern pattern) {
        return Integer.parseInt(z(str, pattern, Collections.EMPTY_MAP));
    }

    private static long n(String str, Pattern pattern) {
        return Long.parseLong(z(str, pattern, Collections.EMPTY_MAP));
    }

    /* JADX WARN: Removed duplicated region for block: B:228:0x0624  */
    /* JADX WARN: Removed duplicated region for block: B:230:0x0631  */
    /* JADX WARN: Removed duplicated region for block: B:233:0x0647  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static wd.f o(wd.g r89, wd.f r90, wd.i.b r91, java.lang.String r92) {
        /*
            Method dump skipped, instructions count: 1838
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: wd.i.o(wd.g, wd.f, wd.i$b, java.lang.String):wd.f");
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Multi-variable type inference failed */
    private static g p(b bVar, String str) {
        ArrayList arrayList;
        Uri e10;
        char c10;
        ArrayList arrayList2;
        String str2;
        ArrayList arrayList3;
        int parseInt;
        String str3;
        ArrayList arrayList4;
        g.b bVar2;
        String str4;
        boolean z10;
        int i10;
        ArrayList arrayList5;
        ArrayList arrayList6;
        boolean z11;
        int i11;
        int i12;
        ArrayList arrayList7;
        float f10;
        ArrayList arrayList8;
        Uri e11;
        int i13;
        String str5 = str;
        HashMap hashMap = new HashMap();
        HashMap hashMap2 = new HashMap();
        ArrayList arrayList9 = new ArrayList();
        ArrayList arrayList10 = new ArrayList();
        ArrayList arrayList11 = new ArrayList();
        ArrayList arrayList12 = new ArrayList();
        ArrayList arrayList13 = new ArrayList();
        ArrayList arrayList14 = new ArrayList();
        ArrayList arrayList15 = new ArrayList();
        ArrayList arrayList16 = new ArrayList();
        boolean z12 = false;
        boolean z13 = false;
        while (true) {
            int i14 = 1;
            if (bVar.a()) {
                String b10 = bVar.b();
                if (b10.startsWith("#EXT")) {
                    arrayList16.add(b10);
                }
                boolean startsWith = b10.startsWith("#EXT-X-I-FRAME-STREAM-INF");
                ArrayList arrayList17 = arrayList13;
                if (b10.startsWith("#EXT-X-DEFINE")) {
                    hashMap2.put(z(b10, P, hashMap2), z(b10, Z, hashMap2));
                } else {
                    if (b10.equals("#EXT-X-INDEPENDENT-SEGMENTS")) {
                        arrayList8 = arrayList11;
                        arrayList7 = arrayList12;
                        arrayList5 = arrayList16;
                        arrayList6 = arrayList15;
                        z13 = true;
                    } else if (b10.startsWith("#EXT-X-MEDIA")) {
                        arrayList14.add(b10);
                    } else if (b10.startsWith("#EXT-X-SESSION-KEY")) {
                        m.b k10 = k(b10, u(b10, I, InterpolationAnimatedNode.EXTRAPOLATE_TYPE_IDENTITY, hashMap2), hashMap2);
                        if (k10 != null) {
                            arrayList15.add(new m(l(z(b10, H, hashMap2)), k10));
                        }
                    } else if (b10.startsWith("#EXT-X-STREAM-INF") || startsWith) {
                        boolean contains = z12 | b10.contains("CLOSED-CAPTIONS=NONE");
                        if (startsWith) {
                            i10 = 16384;
                        } else {
                            i10 = 0;
                        }
                        arrayList5 = arrayList16;
                        int m10 = m(b10, f51984h);
                        int s10 = s(b10, f51979c, -1);
                        String v10 = v(b10, f51986j, hashMap2);
                        arrayList6 = arrayList15;
                        String v11 = v(b10, f51987k, hashMap2);
                        if (v11 != null) {
                            z11 = z13;
                            String[] d12 = w0.d1(v11, "x");
                            int parseInt2 = Integer.parseInt(d12[0]);
                            int parseInt3 = Integer.parseInt(d12[1]);
                            if (parseInt2 > 0 && parseInt3 > 0) {
                                i13 = parseInt2;
                            } else {
                                parseInt3 = -1;
                                i13 = -1;
                            }
                            i12 = parseInt3;
                            i11 = i13;
                        } else {
                            z11 = z13;
                            i11 = -1;
                            i12 = -1;
                        }
                        arrayList7 = arrayList12;
                        String v12 = v(b10, f51988l, hashMap2);
                        if (v12 != null) {
                            f10 = Float.parseFloat(v12);
                        } else {
                            f10 = -1.0f;
                        }
                        arrayList8 = arrayList11;
                        String v13 = v(b10, f51980d, hashMap2);
                        String v14 = v(b10, f51981e, hashMap2);
                        String v15 = v(b10, f51982f, hashMap2);
                        String v16 = v(b10, f51983g, hashMap2);
                        if (startsWith) {
                            e11 = u0.e(str5, z(b10, K, hashMap2));
                        } else if (bVar.a()) {
                            e11 = u0.e(str5, B(bVar.b(), hashMap2));
                        } else {
                            throw l0.c("#EXT-X-STREAM-INF must be followed by another line", null);
                        }
                        Uri uri = e11;
                        arrayList9.add(new g.b(uri, new Format.b().T(arrayList9.size()).M("application/x-mpegURL").K(v10).I(s10).b0(m10).n0(i11).S(i12).R(f10).e0(i10).G(), v13, v14, v15, v16));
                        ArrayList arrayList18 = (ArrayList) hashMap.get(uri);
                        if (arrayList18 == null) {
                            arrayList18 = new ArrayList();
                            hashMap.put(uri, arrayList18);
                        }
                        arrayList18.add(new q.b(s10, m10, v13, v14, v15, v16));
                        z12 = contains;
                        z13 = z11;
                    }
                    arrayList13 = arrayList17;
                    arrayList16 = arrayList5;
                    arrayList15 = arrayList6;
                    arrayList12 = arrayList7;
                    arrayList11 = arrayList8;
                }
                arrayList8 = arrayList11;
                arrayList7 = arrayList12;
                arrayList5 = arrayList16;
                arrayList6 = arrayList15;
                arrayList13 = arrayList17;
                arrayList16 = arrayList5;
                arrayList15 = arrayList6;
                arrayList12 = arrayList7;
                arrayList11 = arrayList8;
            } else {
                ArrayList arrayList19 = arrayList11;
                ArrayList arrayList20 = arrayList12;
                ArrayList arrayList21 = arrayList13;
                ArrayList arrayList22 = arrayList16;
                boolean z14 = z12;
                ArrayList arrayList23 = arrayList15;
                boolean z15 = z13;
                ArrayList arrayList24 = new ArrayList();
                HashSet hashSet = new HashSet();
                int i15 = 0;
                while (i15 < arrayList9.size()) {
                    g.b bVar3 = (g.b) arrayList9.get(i15);
                    if (hashSet.add(bVar3.f51968a)) {
                        if (bVar3.f51969b.f12333u == null) {
                            z10 = i14;
                        } else {
                            z10 = 0;
                        }
                        ne.a.g(z10);
                        Metadata.b[] bVarArr = new Metadata.b[i14];
                        bVarArr[0] = new q(null, null, (List) ne.a.e((ArrayList) hashMap.get(bVar3.f51968a)));
                        arrayList24.add(bVar3.a(bVar3.f51969b.b().Z(new Metadata(bVarArr)).G()));
                    }
                    i15++;
                    i14 = 1;
                }
                int i16 = 0;
                ArrayList arrayList25 = null;
                Format format = null;
                while (i16 < arrayList14.size()) {
                    String str6 = (String) arrayList14.get(i16);
                    String z16 = z(str6, Q, hashMap2);
                    String z17 = z(str6, P, hashMap2);
                    Format.b bVar4 = new Format.b();
                    StringBuilder sb2 = new StringBuilder();
                    sb2.append(z16);
                    ArrayList arrayList26 = arrayList25;
                    sb2.append(":");
                    sb2.append(z17);
                    Format.b X2 = bVar4.U(sb2.toString()).W(z17).M("application/x-mpegURL").i0(x(str6)).e0(w(str6, hashMap2)).X(v(str6, O, hashMap2));
                    String v17 = v(str6, K, hashMap2);
                    if (v17 == null) {
                        e10 = null;
                    } else {
                        e10 = u0.e(str5, v17);
                    }
                    ArrayList arrayList27 = arrayList14;
                    Metadata metadata = new Metadata(new q(z16, z17, Collections.EMPTY_LIST));
                    String z18 = z(str6, M, hashMap2);
                    z18.getClass();
                    switch (z18.hashCode()) {
                        case -959297733:
                            if (z18.equals("SUBTITLES")) {
                                c10 = 0;
                                break;
                            }
                            c10 = 65535;
                            break;
                        case -333210994:
                            if (z18.equals("CLOSED-CAPTIONS")) {
                                c10 = 1;
                                break;
                            }
                            c10 = 65535;
                            break;
                        case 62628790:
                            if (z18.equals("AUDIO")) {
                                c10 = 2;
                                break;
                            }
                            c10 = 65535;
                            break;
                        case 81665115:
                            if (z18.equals("VIDEO")) {
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
                            arrayList2 = arrayList19;
                            g.b g10 = g(arrayList9, z16);
                            if (g10 != null) {
                                String M2 = w0.M(g10.f51969b.f12332t, 3);
                                X2.K(M2);
                                str2 = c0.g(M2);
                            } else {
                                str2 = null;
                            }
                            if (str2 == null) {
                                str2 = "text/vtt";
                            }
                            X2.g0(str2).Z(metadata);
                            if (e10 != null) {
                                g.a aVar = new g.a(e10, X2.G(), z16, z17);
                                arrayList3 = arrayList20;
                                arrayList3.add(aVar);
                            } else {
                                arrayList3 = arrayList20;
                                y.i("HlsPlaylistParser", "EXT-X-MEDIA tag with missing mandatory URI attribute: skipping");
                            }
                            arrayList4 = arrayList26;
                            i16++;
                            str5 = str;
                            arrayList20 = arrayList3;
                            arrayList19 = arrayList2;
                            arrayList25 = arrayList4;
                            arrayList14 = arrayList27;
                        case 1:
                            arrayList2 = arrayList19;
                            String z19 = z(str6, S, hashMap2);
                            if (z19.startsWith("CC")) {
                                parseInt = Integer.parseInt(z19.substring(2));
                                str3 = "application/cea-608";
                            } else {
                                parseInt = Integer.parseInt(z19.substring(7));
                                str3 = "application/cea-708";
                            }
                            if (arrayList26 == null) {
                                arrayList4 = new ArrayList();
                            } else {
                                arrayList4 = arrayList26;
                            }
                            X2.g0(str3).H(parseInt);
                            arrayList4.add(X2.G());
                            arrayList3 = arrayList20;
                            i16++;
                            str5 = str;
                            arrayList20 = arrayList3;
                            arrayList19 = arrayList2;
                            arrayList25 = arrayList4;
                            arrayList14 = arrayList27;
                        case 2:
                            g.b f11 = f(arrayList9, z16);
                            if (f11 != null) {
                                bVar2 = f11;
                                String M3 = w0.M(f11.f51969b.f12332t, 1);
                                X2.K(M3);
                                str4 = c0.g(M3);
                            } else {
                                bVar2 = f11;
                                str4 = null;
                            }
                            String v18 = v(str6, f51985i, hashMap2);
                            if (v18 != null) {
                                X2.J(Integer.parseInt(w0.e1(v18, "/")[0]));
                                if ("audio/eac3".equals(str4) && v18.endsWith("/JOC")) {
                                    X2.K("ec+3");
                                    str4 = "audio/eac3-joc";
                                }
                            }
                            X2.g0(str4);
                            if (e10 != null) {
                                X2.Z(metadata);
                                arrayList2 = arrayList19;
                                arrayList2.add(new g.a(e10, X2.G(), z16, z17));
                            } else {
                                arrayList2 = arrayList19;
                                if (bVar2 != null) {
                                    arrayList4 = arrayList26;
                                    format = X2.G();
                                    arrayList3 = arrayList20;
                                    i16++;
                                    str5 = str;
                                    arrayList20 = arrayList3;
                                    arrayList19 = arrayList2;
                                    arrayList25 = arrayList4;
                                    arrayList14 = arrayList27;
                                }
                            }
                            arrayList3 = arrayList20;
                            arrayList4 = arrayList26;
                            i16++;
                            str5 = str;
                            arrayList20 = arrayList3;
                            arrayList19 = arrayList2;
                            arrayList25 = arrayList4;
                            arrayList14 = arrayList27;
                            break;
                        case 3:
                            g.b h10 = h(arrayList9, z16);
                            if (h10 != null) {
                                Format format2 = h10.f51969b;
                                String M4 = w0.M(format2.f12332t, 2);
                                X2.K(M4).g0(c0.g(M4)).n0(format2.B).S(format2.C).R(format2.D);
                            }
                            if (e10 != null) {
                                X2.Z(metadata);
                                arrayList10.add(new g.a(e10, X2.G(), z16, z17));
                            }
                            arrayList3 = arrayList20;
                            arrayList2 = arrayList19;
                            arrayList4 = arrayList26;
                            i16++;
                            str5 = str;
                            arrayList20 = arrayList3;
                            arrayList19 = arrayList2;
                            arrayList25 = arrayList4;
                            arrayList14 = arrayList27;
                        default:
                            arrayList3 = arrayList20;
                            arrayList2 = arrayList19;
                            arrayList4 = arrayList26;
                            i16++;
                            str5 = str;
                            arrayList20 = arrayList3;
                            arrayList19 = arrayList2;
                            arrayList25 = arrayList4;
                            arrayList14 = arrayList27;
                    }
                }
                ArrayList arrayList28 = arrayList25;
                ArrayList arrayList29 = arrayList20;
                ArrayList arrayList30 = arrayList19;
                if (z14) {
                    arrayList = Collections.EMPTY_LIST;
                } else {
                    arrayList = arrayList28;
                }
                return new g(str, arrayList22, arrayList24, arrayList10, arrayList30, arrayList29, arrayList21, format, arrayList, z15, hashMap2, arrayList23);
            }
        }
    }

    private static boolean q(String str, Pattern pattern, boolean z10) {
        Matcher matcher = pattern.matcher(str);
        if (matcher.find()) {
            return "YES".equals(matcher.group(1));
        }
        return z10;
    }

    private static double r(String str, Pattern pattern, double d10) {
        Matcher matcher = pattern.matcher(str);
        if (matcher.find()) {
            return Double.parseDouble((String) ne.a.e(matcher.group(1)));
        }
        return d10;
    }

    private static int s(String str, Pattern pattern, int i10) {
        Matcher matcher = pattern.matcher(str);
        if (matcher.find()) {
            return Integer.parseInt((String) ne.a.e(matcher.group(1)));
        }
        return i10;
    }

    private static long t(String str, Pattern pattern, long j10) {
        Matcher matcher = pattern.matcher(str);
        if (matcher.find()) {
            return Long.parseLong((String) ne.a.e(matcher.group(1)));
        }
        return j10;
    }

    private static String u(String str, Pattern pattern, String str2, Map map) {
        Matcher matcher = pattern.matcher(str);
        if (matcher.find()) {
            str2 = (String) ne.a.e(matcher.group(1));
        }
        if (!map.isEmpty() && str2 != null) {
            return B(str2, map);
        }
        return str2;
    }

    private static String v(String str, Pattern pattern, Map map) {
        return u(str, pattern, null, map);
    }

    private static int w(String str, Map map) {
        String v10 = v(str, R, map);
        int i10 = 0;
        if (TextUtils.isEmpty(v10)) {
            return 0;
        }
        String[] d12 = w0.d1(v10, ",");
        if (w0.s(d12, "public.accessibility.describes-video")) {
            i10 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
        }
        if (w0.s(d12, "public.accessibility.transcribes-spoken-dialog")) {
            i10 |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
        }
        if (w0.s(d12, "public.accessibility.describes-music-and-sound")) {
            i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
        }
        if (w0.s(d12, "public.easy-to-read")) {
            return i10 | 8192;
        }
        return i10;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r0v2, types: [int] */
    /* JADX WARN: Type inference failed for: r0v5 */
    /* JADX WARN: Type inference failed for: r0v6 */
    private static int x(String str) {
        boolean q10 = q(str, U, false);
        ?? r02 = q10;
        if (q(str, V, false)) {
            r02 = (q10 ? 1 : 0) | true;
        }
        if (q(str, T, false)) {
            return r02 | 4;
        }
        return r02;
    }

    private static f.C0706f y(String str) {
        long j10;
        long j11;
        double r10 = r(str, f51994r, -9.223372036854776E18d);
        long j12 = -9223372036854775807L;
        if (r10 == -9.223372036854776E18d) {
            j10 = -9223372036854775807L;
        } else {
            j10 = (long) (r10 * 1000000.0d);
        }
        boolean q10 = q(str, f51995s, false);
        double r11 = r(str, f51997u, -9.223372036854776E18d);
        if (r11 == -9.223372036854776E18d) {
            j11 = -9223372036854775807L;
        } else {
            j11 = (long) (r11 * 1000000.0d);
        }
        double r12 = r(str, f51998v, -9.223372036854776E18d);
        if (r12 != -9.223372036854776E18d) {
            j12 = (long) (r12 * 1000000.0d);
        }
        return new f.C0706f(j10, q10, j11, j12, q(str, f51999w, false));
    }

    private static String z(String str, Pattern pattern, Map map) {
        String v10 = v(str, pattern, map);
        if (v10 != null) {
            return v10;
        }
        throw l0.c("Couldn't match " + pattern.pattern() + " in " + str, null);
    }

    @Override // com.google.android.exoplayer2.upstream.j.a
    /* renamed from: i */
    public h a(Uri uri, InputStream inputStream) {
        String trim;
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
        ArrayDeque arrayDeque = new ArrayDeque();
        try {
            if (b(bufferedReader)) {
                while (true) {
                    String readLine = bufferedReader.readLine();
                    if (readLine != null) {
                        trim = readLine.trim();
                        if (!trim.isEmpty()) {
                            if (trim.startsWith("#EXT-X-STREAM-INF")) {
                                arrayDeque.add(trim);
                                return p(new b(arrayDeque, bufferedReader), uri.toString());
                            } else if (trim.startsWith("#EXT-X-TARGETDURATION") || trim.startsWith("#EXT-X-MEDIA-SEQUENCE") || trim.startsWith("#EXTINF") || trim.startsWith("#EXT-X-KEY") || trim.startsWith("#EXT-X-BYTERANGE") || trim.equals("#EXT-X-DISCONTINUITY") || trim.equals("#EXT-X-DISCONTINUITY-SEQUENCE") || trim.equals("#EXT-X-ENDLIST")) {
                                break;
                            } else {
                                arrayDeque.add(trim);
                            }
                        }
                    } else {
                        w0.n(bufferedReader);
                        throw l0.c("Failed to parse the playlist, could not identify any tags.", null);
                    }
                }
                arrayDeque.add(trim);
                return o(this.f52003a, this.f52004b, new b(arrayDeque, bufferedReader), uri.toString());
            }
            throw l0.c("Input does not start with the #EXTM3U header.", null);
        } finally {
            w0.n(bufferedReader);
        }
    }

    public i(g gVar, f fVar) {
        this.f52003a = gVar;
        this.f52004b = fVar;
    }
}
