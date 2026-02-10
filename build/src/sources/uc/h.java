package uc;

import android.net.Uri;
import ed.h0;
import java.lang.reflect.Constructor;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicBoolean;
import oe.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements p {

    /* renamed from: o  reason: collision with root package name */
    private static final int[] f51486o = {5, 4, 12, 8, 3, 10, 9, 11, 6, 2, 0, 1, 7, 16, 15, 14};

    /* renamed from: p  reason: collision with root package name */
    private static final a f51487p = new a(new a.InterfaceC0715a() { // from class: uc.f
        @Override // uc.h.a.InterfaceC0715a
        public final Constructor a() {
            Constructor g10;
            g10 = h.g();
            return g10;
        }
    });

    /* renamed from: q  reason: collision with root package name */
    private static final a f51488q = new a(new a.InterfaceC0715a() { // from class: uc.g
        @Override // uc.h.a.InterfaceC0715a
        public final Constructor a() {
            Constructor h10;
            h10 = h.h();
            return h10;
        }
    });

    /* renamed from: b  reason: collision with root package name */
    private boolean f51489b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f51490c;

    /* renamed from: d  reason: collision with root package name */
    private int f51491d;

    /* renamed from: e  reason: collision with root package name */
    private int f51492e;

    /* renamed from: f  reason: collision with root package name */
    private int f51493f;

    /* renamed from: g  reason: collision with root package name */
    private int f51494g;

    /* renamed from: h  reason: collision with root package name */
    private int f51495h;

    /* renamed from: i  reason: collision with root package name */
    private int f51496i;

    /* renamed from: j  reason: collision with root package name */
    private int f51497j;

    /* renamed from: l  reason: collision with root package name */
    private int f51499l;

    /* renamed from: m  reason: collision with root package name */
    private oi.s f51500m;

    /* renamed from: k  reason: collision with root package name */
    private int f51498k = 1;

    /* renamed from: n  reason: collision with root package name */
    private int f51501n = 112800;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final InterfaceC0715a f51502a;

        /* renamed from: b  reason: collision with root package name */
        private final AtomicBoolean f51503b = new AtomicBoolean(false);

        /* renamed from: c  reason: collision with root package name */
        private Constructor f51504c;

        /* renamed from: uc.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public interface InterfaceC0715a {
            Constructor a();
        }

        public a(InterfaceC0715a interfaceC0715a) {
            this.f51502a = interfaceC0715a;
        }

        private Constructor b() {
            synchronized (this.f51503b) {
                if (this.f51503b.get()) {
                    return this.f51504c;
                }
                try {
                    return this.f51502a.a();
                } catch (ClassNotFoundException unused) {
                    this.f51503b.set(true);
                    return this.f51504c;
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
                list.add(new ed.b());
                return;
            case 1:
                list.add(new ed.e());
                return;
            case 2:
                int i12 = this.f51491d | (this.f51489b ? 1 : 0);
                if (!this.f51490c) {
                    i11 = 0;
                }
                list.add(new ed.h(i11 | i12));
                return;
            case 3:
                int i13 = this.f51492e | (this.f51489b ? 1 : 0);
                if (!this.f51490c) {
                    i11 = 0;
                }
                list.add(new vc.b(i11 | i13));
                return;
            case 4:
                k a10 = f51487p.a(Integer.valueOf(this.f51493f));
                if (a10 != null) {
                    list.add(a10);
                    return;
                } else {
                    list.add(new xc.d(this.f51493f));
                    return;
                }
            case 5:
                list.add(new yc.c());
                return;
            case 6:
                list.add(new ad.e(this.f51494g));
                return;
            case 7:
                int i14 = this.f51497j | (this.f51489b ? 1 : 0);
                if (!this.f51490c) {
                    i11 = 0;
                }
                list.add(new bd.f(i11 | i14));
                return;
            case 8:
                list.add(new cd.g(this.f51496i));
                list.add(new cd.k(this.f51495h));
                return;
            case 9:
                list.add(new dd.d());
                return;
            case 10:
                list.add(new ed.a0());
                return;
            case 11:
                if (this.f51500m == null) {
                    this.f51500m = oi.s.t();
                }
                list.add(new h0(this.f51498k, new s0(0L), new ed.j(this.f51499l, this.f51500m), this.f51501n));
                return;
            case 12:
                list.add(new fd.b());
                return;
            case 13:
            default:
                return;
            case 14:
                list.add(new zc.a());
                return;
            case 15:
                k a11 = f51488q.a(new Object[0]);
                if (a11 != null) {
                    list.add(a11);
                    return;
                }
                return;
            case 16:
                list.add(new wc.b());
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

    @Override // uc.p
    public synchronized k[] a(Uri uri, Map map) {
        ArrayList arrayList;
        try {
            int[] iArr = f51486o;
            arrayList = new ArrayList(iArr.length);
            int b10 = oe.p.b(map);
            if (b10 != -1) {
                f(b10, arrayList);
            }
            int c10 = oe.p.c(uri);
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

    @Override // uc.p
    public synchronized k[] b() {
        return a(Uri.EMPTY, new HashMap());
    }
}
