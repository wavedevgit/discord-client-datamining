package rc;

import android.media.MediaCrypto;
import android.media.MediaCryptoException;
import android.media.MediaDrm;
import android.media.UnsupportedSchemeException;
import android.media.metrics.LogSessionId;
import android.text.TextUtils;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import mc.t1;
import ne.w0;
import rc.b0;
import rc.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g0 implements b0 {

    /* renamed from: d  reason: collision with root package name */
    public static final b0.c f48169d = new b0.c() { // from class: rc.d0
        @Override // rc.b0.c
        public final b0 a(UUID uuid) {
            return g0.n(uuid);
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final UUID f48170a;

    /* renamed from: b  reason: collision with root package name */
    private final MediaDrm f48171b;

    /* renamed from: c  reason: collision with root package name */
    private int f48172c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a {
        public static boolean a(MediaDrm mediaDrm, String str) {
            return mediaDrm.requiresSecureDecoder(str);
        }

        public static void b(MediaDrm mediaDrm, byte[] bArr, t1 t1Var) {
            LogSessionId logSessionId;
            LogSessionId a10 = t1Var.a();
            logSessionId = LogSessionId.LOG_SESSION_ID_NONE;
            if (!a10.equals(logSessionId)) {
                f0.a(ne.a.e(mediaDrm.getPlaybackComponent(bArr))).setLogSessionId(a10);
            }
        }
    }

    private g0(UUID uuid) {
        ne.a.e(uuid);
        ne.a.b(!lc.d.f37070b.equals(uuid), "Use C.CLEARKEY_UUID instead");
        this.f48170a = uuid;
        MediaDrm mediaDrm = new MediaDrm(u(uuid));
        this.f48171b = mediaDrm;
        this.f48172c = 1;
        if (lc.d.f37072d.equals(uuid) && z()) {
            w(mediaDrm);
        }
    }

    public static g0 A(UUID uuid) {
        try {
            return new g0(uuid);
        } catch (UnsupportedSchemeException e10) {
            throw new l0(1, e10);
        } catch (Exception e11) {
            throw new l0(2, e11);
        }
    }

    public static /* synthetic */ b0 n(UUID uuid) {
        try {
            return A(uuid);
        } catch (l0 unused) {
            ne.y.c("FrameworkMediaDrm", "Failed to instantiate a FrameworkMediaDrm for uuid: " + uuid + ".");
            return new z();
        }
    }

    public static /* synthetic */ void o(g0 g0Var, b0.b bVar, MediaDrm mediaDrm, byte[] bArr, int i10, int i11, byte[] bArr2) {
        g0Var.getClass();
        bVar.a(g0Var, bArr, i10, i11, bArr2);
    }

    private static byte[] p(byte[] bArr) {
        int indexOf;
        ne.h0 h0Var = new ne.h0(bArr);
        int u10 = h0Var.u();
        short w10 = h0Var.w();
        short w11 = h0Var.w();
        if (w10 == 1 && w11 == 1) {
            short w12 = h0Var.w();
            Charset charset = ii.d.f28539e;
            String F = h0Var.F(w12, charset);
            if (F.contains("<LA_URL>")) {
                return bArr;
            }
            if (F.indexOf("</DATA>") == -1) {
                ne.y.i("FrameworkMediaDrm", "Could not find the </DATA> tag. Skipping LA_URL workaround.");
            }
            String str = F.substring(0, indexOf) + "<LA_URL>https://x</LA_URL>" + F.substring(indexOf);
            int i10 = u10 + 52;
            ByteBuffer allocate = ByteBuffer.allocate(i10);
            allocate.order(ByteOrder.LITTLE_ENDIAN);
            allocate.putInt(i10);
            allocate.putShort(w10);
            allocate.putShort(w11);
            allocate.putShort((short) (str.length() * 2));
            allocate.put(str.getBytes(charset));
            return allocate.array();
        }
        ne.y.f("FrameworkMediaDrm", "Unexpected record count or type. Skipping LA_URL workaround.");
        return bArr;
    }

    private static String q(String str) {
        if ("<LA_URL>https://x</LA_URL>".equals(str)) {
            return "";
        }
        if (w0.f40295a == 33 && "https://default.url".equals(str)) {
            return "";
        }
        return str;
    }

    private static byte[] r(UUID uuid, byte[] bArr) {
        if (lc.d.f37071c.equals(uuid)) {
            return rc.a.a(bArr);
        }
        return bArr;
    }

    /* JADX WARN: Code restructure failed: missing block: B:24:0x0056, code lost:
        if ("AFTT".equals(r0) == false) goto L15;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static byte[] s(java.util.UUID r3, byte[] r4) {
        /*
            java.util.UUID r0 = lc.d.f37073e
            boolean r1 = r0.equals(r3)
            if (r1 == 0) goto L18
            byte[] r1 = bd.l.e(r4, r3)
            if (r1 != 0) goto Lf
            goto L10
        Lf:
            r4 = r1
        L10:
            byte[] r4 = p(r4)
            byte[] r4 = bd.l.a(r0, r4)
        L18:
            int r1 = ne.w0.f40295a
            r2 = 23
            if (r1 >= r2) goto L26
            java.util.UUID r1 = lc.d.f37072d
            boolean r1 = r1.equals(r3)
            if (r1 != 0) goto L58
        L26:
            boolean r0 = r0.equals(r3)
            if (r0 == 0) goto L5f
            java.lang.String r0 = "Amazon"
            java.lang.String r1 = ne.w0.f40297c
            boolean r0 = r0.equals(r1)
            if (r0 == 0) goto L5f
            java.lang.String r0 = ne.w0.f40298d
            java.lang.String r1 = "AFTB"
            boolean r1 = r1.equals(r0)
            if (r1 != 0) goto L58
            java.lang.String r1 = "AFTS"
            boolean r1 = r1.equals(r0)
            if (r1 != 0) goto L58
            java.lang.String r1 = "AFTM"
            boolean r1 = r1.equals(r0)
            if (r1 != 0) goto L58
            java.lang.String r1 = "AFTT"
            boolean r0 = r1.equals(r0)
            if (r0 == 0) goto L5f
        L58:
            byte[] r3 = bd.l.e(r4, r3)
            if (r3 == 0) goto L5f
            return r3
        L5f:
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: rc.g0.s(java.util.UUID, byte[]):byte[]");
    }

    private static String t(UUID uuid, String str) {
        if (w0.f40295a < 26 && lc.d.f37071c.equals(uuid) && ("video/mp4".equals(str) || "audio/mp4".equals(str))) {
            return "cenc";
        }
        return str;
    }

    private static UUID u(UUID uuid) {
        if (w0.f40295a < 27 && lc.d.f37071c.equals(uuid)) {
            return lc.d.f37070b;
        }
        return uuid;
    }

    private static void w(MediaDrm mediaDrm) {
        mediaDrm.setPropertyString("securityLevel", "L3");
    }

    private static m.b y(UUID uuid, List list) {
        if (!lc.d.f37072d.equals(uuid)) {
            return (m.b) list.get(0);
        }
        if (w0.f40295a >= 28 && list.size() > 1) {
            m.b bVar = (m.b) list.get(0);
            int i10 = 0;
            for (int i11 = 0; i11 < list.size(); i11++) {
                m.b bVar2 = (m.b) list.get(i11);
                byte[] bArr = (byte[]) ne.a.e(bVar2.f48241p);
                if (w0.c(bVar2.f48240o, bVar.f48240o) && w0.c(bVar2.f48239i, bVar.f48239i) && bd.l.c(bArr)) {
                    i10 += bArr.length;
                }
            }
            byte[] bArr2 = new byte[i10];
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                byte[] bArr3 = (byte[]) ne.a.e(((m.b) list.get(i13)).f48241p);
                int length = bArr3.length;
                System.arraycopy(bArr3, 0, bArr2, i12, length);
                i12 += length;
            }
            return bVar.b(bArr2);
        }
        for (int i14 = 0; i14 < list.size(); i14++) {
            m.b bVar3 = (m.b) list.get(i14);
            int g10 = bd.l.g((byte[]) ne.a.e(bVar3.f48241p));
            int i15 = w0.f40295a;
            if ((i15 < 23 && g10 == 0) || (i15 >= 23 && g10 == 1)) {
                return bVar3;
            }
        }
        return (m.b) list.get(0);
    }

    private static boolean z() {
        return "ASUS_Z00AD".equals(w0.f40298d);
    }

    @Override // rc.b0
    public Map a(byte[] bArr) {
        return this.f48171b.queryKeyStatus(bArr);
    }

    @Override // rc.b0
    public b0.d b() {
        MediaDrm.ProvisionRequest provisionRequest = this.f48171b.getProvisionRequest();
        return new b0.d(provisionRequest.getData(), provisionRequest.getDefaultUrl());
    }

    @Override // rc.b0
    public byte[] c() {
        return this.f48171b.openSession();
    }

    @Override // rc.b0
    public void d(byte[] bArr, byte[] bArr2) {
        this.f48171b.restoreKeys(bArr, bArr2);
    }

    @Override // rc.b0
    public void e(byte[] bArr) {
        this.f48171b.provideProvisionResponse(bArr);
    }

    @Override // rc.b0
    public void f(final b0.b bVar) {
        MediaDrm.OnEventListener onEventListener;
        MediaDrm mediaDrm = this.f48171b;
        if (bVar == null) {
            onEventListener = null;
        } else {
            onEventListener = new MediaDrm.OnEventListener() { // from class: rc.e0
                @Override // android.media.MediaDrm.OnEventListener
                public final void onEvent(MediaDrm mediaDrm2, byte[] bArr, int i10, int i11, byte[] bArr2) {
                    g0.o(g0.this, bVar, mediaDrm2, bArr, i10, i11, bArr2);
                }
            };
        }
        mediaDrm.setOnEventListener(onEventListener);
    }

    @Override // rc.b0
    public int g() {
        return 2;
    }

    @Override // rc.b0
    public boolean i(byte[] bArr, String str) {
        if (w0.f40295a >= 31) {
            return a.a(this.f48171b, str);
        }
        try {
            MediaCrypto mediaCrypto = new MediaCrypto(this.f48170a, bArr);
            try {
                return mediaCrypto.requiresSecureDecoderComponent(str);
            } finally {
                mediaCrypto.release();
            }
        } catch (MediaCryptoException unused) {
            return true;
        }
    }

    @Override // rc.b0
    public void j(byte[] bArr) {
        this.f48171b.closeSession(bArr);
    }

    @Override // rc.b0
    public byte[] k(byte[] bArr, byte[] bArr2) {
        if (lc.d.f37071c.equals(this.f48170a)) {
            bArr2 = rc.a.b(bArr2);
        }
        return this.f48171b.provideKeyResponse(bArr, bArr2);
    }

    @Override // rc.b0
    public b0.a l(byte[] bArr, List list, int i10, HashMap hashMap) {
        m.b bVar;
        byte[] bArr2;
        String str;
        int i11;
        if (list != null) {
            bVar = y(this.f48170a, list);
            bArr2 = s(this.f48170a, (byte[]) ne.a.e(bVar.f48241p));
            str = t(this.f48170a, bVar.f48240o);
        } else {
            bVar = null;
            bArr2 = null;
            str = null;
        }
        MediaDrm.KeyRequest keyRequest = this.f48171b.getKeyRequest(bArr, bArr2, str, i10, hashMap);
        byte[] r10 = r(this.f48170a, keyRequest.getData());
        String q10 = q(keyRequest.getDefaultUrl());
        if (TextUtils.isEmpty(q10) && bVar != null && !TextUtils.isEmpty(bVar.f48239i)) {
            q10 = bVar.f48239i;
        }
        if (w0.f40295a >= 23) {
            i11 = keyRequest.getRequestType();
        } else {
            i11 = Integer.MIN_VALUE;
        }
        return new b0.a(r10, q10, i11);
    }

    @Override // rc.b0
    public void m(byte[] bArr, t1 t1Var) {
        if (w0.f40295a >= 31) {
            try {
                a.b(this.f48171b, bArr, t1Var);
            } catch (UnsupportedOperationException unused) {
                ne.y.i("FrameworkMediaDrm", "setLogSessionId failed.");
            }
        }
    }

    @Override // rc.b0
    public synchronized void release() {
        int i10 = this.f48172c - 1;
        this.f48172c = i10;
        if (i10 == 0) {
            this.f48171b.release();
        }
    }

    @Override // rc.b0
    /* renamed from: v */
    public c0 h(byte[] bArr) {
        boolean z10;
        if (w0.f40295a < 21 && lc.d.f37072d.equals(this.f48170a) && "L3".equals(x("securityLevel"))) {
            z10 = true;
        } else {
            z10 = false;
        }
        return new c0(u(this.f48170a), bArr, z10);
    }

    public String x(String str) {
        return this.f48171b.getPropertyString(str);
    }
}
