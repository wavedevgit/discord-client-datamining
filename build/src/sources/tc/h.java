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
    private static final int[] f50554o = {5, 4, 12, 8, 3, 10, 9, 11, 6, 2, 0, 1, 7, 16, 15, 14};

    /* renamed from: p  reason: collision with root package name */
    private static final a f50555p = new a(new a.InterfaceC0649a() { // from class: tc.f
        @Override // tc.h.a.InterfaceC0649a
        public final Constructor a() {
            Constructor g10;
            g10 = h.g();
            return g10;
        }
    });

    /* renamed from: q  reason: collision with root package name */
    private static final a f50556q = new a(new a.InterfaceC0649a() { // from class: tc.g
        @Override // tc.h.a.InterfaceC0649a
        public final Constructor a() {
            Constructor h10;
            h10 = h.h();
            return h10;
        }
    });

    /* renamed from: b  reason: collision with root package name */
    private boolean f50557b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f50558c;

    /* renamed from: d  reason: collision with root package name */
    private int f50559d;

    /* renamed from: e  reason: collision with root package name */
    private int f50560e;

    /* renamed from: f  reason: collision with root package name */
    private int f50561f;

    /* renamed from: g  reason: collision with root package name */
    private int f50562g;

    /* renamed from: h  reason: collision with root package name */
    private int f50563h;

    /* renamed from: i  reason: collision with root package name */
    private int f50564i;

    /* renamed from: j  reason: collision with root package name */
    private int f50565j;

    /* renamed from: l  reason: collision with root package name */
    private int f50567l;

    /* renamed from: m  reason: collision with root package name */
    private mi.s f50568m;

    /* renamed from: k  reason: collision with root package name */
    private int f50566k = 1;

    /* renamed from: n  reason: collision with root package name */
    private int f50569n = 112800;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final InterfaceC0649a f50570a;

        /* renamed from: b  reason: collision with root package name */
        private final AtomicBoolean f50571b = new AtomicBoolean(false);

        /* renamed from: c  reason: collision with root package name */
        private Constructor f50572c;

        /* renamed from: tc.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public interface InterfaceC0649a {
            Constructor a();
        }

        public a(InterfaceC0649a interfaceC0649a) {
            this.f50570a = interfaceC0649a;
        }

        private Constructor b() {
            synchronized (this.f50571b) {
                if (this.f50571b.get()) {
                    return this.f50572c;
                }
                try {
                    return this.f50570a.a();
                } catch (ClassNotFoundException unused) {
                    this.f50571b.set(true);
                    return this.f50572c;
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
                int i12 = this.f50559d | (this.f50557b ? 1 : 0);
                if (!this.f50558c) {
                    i11 = 0;
                }
                list.add(new dd.h(i11 | i12));
                return;
            case 3:
                int i13 = this.f50560e | (this.f50557b ? 1 : 0);
                if (!this.f50558c) {
                    i11 = 0;
                }
                list.add(new uc.b(i11 | i13));
                return;
            case 4:
                k a10 = f50555p.a(Integer.valueOf(this.f50561f));
                if (a10 != null) {
                    list.add(a10);
                    return;
                } else {
                    list.add(new wc.d(this.f50561f));
                    return;
                }
            case 5:
                list.add(new xc.c());
                return;
            case 6:
                list.add(new zc.e(this.f50562g));
                return;
            case 7:
                int i14 = this.f50565j | (this.f50557b ? 1 : 0);
                if (!this.f50558c) {
                    i11 = 0;
                }
                list.add(new ad.f(i11 | i14));
                return;
            case 8:
                list.add(new bd.g(this.f50564i));
                list.add(new bd.k(this.f50563h));
                return;
            case 9:
                list.add(new cd.d());
                return;
            case 10:
                list.add(new dd.a0());
                return;
            case 11:
                if (this.f50568m == null) {
                    this.f50568m = mi.s.s();
                }
                list.add(new h0(this.f50566k, new s0(0L), new dd.j(this.f50567l, this.f50568m), this.f50569n));
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
                k a11 = f50556q.a(new Object[0]);
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
            int[] iArr = f50554o;
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
