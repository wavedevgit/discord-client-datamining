package tc;

import android.net.Uri;
import dd.h0;
import java.lang.reflect.Constructor;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicBoolean;
import ne.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements p {

    /* renamed from: o  reason: collision with root package name */
    private static final int[] f49741o = {5, 4, 12, 8, 3, 10, 9, 11, 6, 2, 0, 1, 7, 16, 15, 14};

    /* renamed from: p  reason: collision with root package name */
    private static final a f49742p = new a(new a.InterfaceC0649a() { // from class: tc.f
        @Override // tc.h.a.InterfaceC0649a
        public final Constructor a() {
            Constructor g10;
            g10 = h.g();
            return g10;
        }
    });

    /* renamed from: q  reason: collision with root package name */
    private static final a f49743q = new a(new a.InterfaceC0649a() { // from class: tc.g
        @Override // tc.h.a.InterfaceC0649a
        public final Constructor a() {
            Constructor h10;
            h10 = h.h();
            return h10;
        }
    });

    /* renamed from: b  reason: collision with root package name */
    private boolean f49744b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f49745c;

    /* renamed from: d  reason: collision with root package name */
    private int f49746d;

    /* renamed from: e  reason: collision with root package name */
    private int f49747e;

    /* renamed from: f  reason: collision with root package name */
    private int f49748f;

    /* renamed from: g  reason: collision with root package name */
    private int f49749g;

    /* renamed from: h  reason: collision with root package name */
    private int f49750h;

    /* renamed from: i  reason: collision with root package name */
    private int f49751i;

    /* renamed from: j  reason: collision with root package name */
    private int f49752j;

    /* renamed from: l  reason: collision with root package name */
    private int f49754l;

    /* renamed from: m  reason: collision with root package name */
    private ji.s f49755m;

    /* renamed from: k  reason: collision with root package name */
    private int f49753k = 1;

    /* renamed from: n  reason: collision with root package name */
    private int f49756n = 112800;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final InterfaceC0649a f49757a;

        /* renamed from: b  reason: collision with root package name */
        private final AtomicBoolean f49758b = new AtomicBoolean(false);

        /* renamed from: c  reason: collision with root package name */
        private Constructor f49759c;

        /* renamed from: tc.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public interface InterfaceC0649a {
            Constructor a();
        }

        public a(InterfaceC0649a interfaceC0649a) {
            this.f49757a = interfaceC0649a;
        }

        private Constructor b() {
            synchronized (this.f49758b) {
                if (this.f49758b.get()) {
                    return this.f49759c;
                }
                try {
                    return this.f49757a.a();
                } catch (ClassNotFoundException unused) {
                    this.f49758b.set(true);
                    return this.f49759c;
                } catch (Exception e10) {
                    throw new RuntimeException("Error instantiating extension", e10);
                }
            }
        }

        public k a(Object... objArr) {
            Constructor b10 = b();
            if (b10 == null) {
                return null;
            }
            try {
                return (k) b10.newInstance(objArr);
            } catch (Exception e10) {
                throw new IllegalStateException("Unexpected error creating extractor", e10);
            }
        }
    }

    private void f(int i10, List list) {
        int i11 = 2;
        switch (i10) {
            case 0:
                list.add(new dd.b());
                return;
            case 1:
                list.add(new dd.e());
                return;
            case 2:
                int i12 = this.f49746d | (this.f49744b ? 1 : 0);
                if (!this.f49745c) {
                    i11 = 0;
                }
                list.add(new dd.h(i11 | i12));
                return;
            case 3:
                int i13 = this.f49747e | (this.f49744b ? 1 : 0);
                if (!this.f49745c) {
                    i11 = 0;
                }
                list.add(new uc.b(i11 | i13));
                return;
            case 4:
                k a10 = f49742p.a(Integer.valueOf(this.f49748f));
                if (a10 != null) {
                    list.add(a10);
                    return;
                } else {
                    list.add(new wc.d(this.f49748f));
                    return;
                }
            case 5:
                list.add(new xc.c());
                return;
            case 6:
                list.add(new zc.e(this.f49749g));
                return;
            case 7:
                int i14 = this.f49752j | (this.f49744b ? 1 : 0);
                if (!this.f49745c) {
                    i11 = 0;
                }
                list.add(new ad.f(i11 | i14));
                return;
            case 8:
                list.add(new bd.g(this.f49751i));
                list.add(new bd.k(this.f49750h));
                return;
            case 9:
                list.add(new cd.d());
                return;
            case 10:
                list.add(new dd.a0());
                return;
            case 11:
                if (this.f49755m == null) {
                    this.f49755m = ji.s.r();
                }
                list.add(new h0(this.f49753k, new s0(0L), new dd.j(this.f49754l, this.f49755m), this.f49756n));
                return;
            case 12:
                list.add(new ed.b());
                return;
            case 13:
            default:
                return;
            case 14:
                list.add(new yc.a());
                return;
            case 15:
                k a11 = f49743q.a(new Object[0]);
                if (a11 != null) {
                    list.add(a11);
                    return;
                }
                return;
            case 16:
                list.add(new vc.b());
                return;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Constructor g() {
        if (!Boolean.TRUE.equals(Class.forName("com.google.android.exoplayer2.ext.flac.FlacLibrary").getMethod("isAvailable", null).invoke(null, null))) {
            return null;
        }
        return Class.forName("com.google.android.exoplayer2.ext.flac.FlacExtractor").asSubclass(k.class).getConstructor(Integer.TYPE);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Constructor h() {
        return Class.forName("com.google.android.exoplayer2.decoder.midi.MidiExtractor").asSubclass(k.class).getConstructor(null);
    }

    @Override // tc.p
    public synchronized k[] a(Uri uri, Map map) {
        ArrayList arrayList;
        try {
            int[] iArr = f49741o;
            arrayList = new ArrayList(iArr.length);
            int b10 = ne.p.b(map);
            if (b10 != -1) {
                f(b10, arrayList);
            }
            int c10 = ne.p.c(uri);
            if (c10 != -1 && c10 != b10) {
                f(c10, arrayList);
            }
            for (int i10 : iArr) {
                if (i10 != b10 && i10 != c10) {
                    f(i10, arrayList);
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return (k[]) arrayList.toArray(new k[arrayList.size()]);
    }

    @Override // tc.p
    public synchronized k[] b() {
        return a(Uri.EMPTY, new HashMap());
    }
}
