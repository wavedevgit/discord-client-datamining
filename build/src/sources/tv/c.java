package tv;

import java.io.InputStream;
import java.util.Collections;
import java.util.Map;
import jk.b0;
import jk.c0;
import jk.j0;
import jk.j1;
import jk.q0;
import jk.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c extends s implements j0 {

    /* renamed from: q  reason: collision with root package name */
    private static final c f50299q;

    /* renamed from: r  reason: collision with root package name */
    private static volatile q0 f50300r;

    /* renamed from: p  reason: collision with root package name */
    private c0 f50301p = c0.d();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f50302a;

        static {
            int[] iArr = new int[s.d.values().length];
            f50302a = iArr;
            try {
                iArr[s.d.NEW_MUTABLE_INSTANCE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f50302a[s.d.NEW_BUILDER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f50302a[s.d.BUILD_MESSAGE_INFO.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f50302a[s.d.GET_DEFAULT_INSTANCE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f50302a[s.d.GET_PARSER.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f50302a[s.d.GET_MEMOIZED_IS_INITIALIZED.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f50302a[s.d.SET_MEMOIZED_IS_INITIALIZED.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends s.a implements j0 {
        private b() {
            super(c.f50299q);
        }
    }

    /* renamed from: tv.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class C0688c {

        /* renamed from: a  reason: collision with root package name */
        static final b0 f50303a = b0.b(j1.b.f31086v, "", j1.b.f31088x, tv.a.H());
    }

    static {
        c cVar = new c();
        f50299q = cVar;
        s.C(c.class, cVar);
    }

    private c() {
    }

    private c0 H() {
        return this.f50301p;
    }

    public static b I() {
        return (b) f50299q.g();
    }

    public static c J(InputStream inputStream) {
        return (c) s.z(f50299q, inputStream);
    }

    public Map G() {
        return Collections.unmodifiableMap(H());
    }

    @Override // jk.s
    protected final Object j(s.d dVar, Object obj, Object obj2) {
        q0 q0Var;
        switch (a.f50302a[dVar.ordinal()]) {
            case 1:
                return new c();
            case 2:
                return new b();
            case 3:
                return s.x(f50299q, "\u0001\u0001\u0000\u0000\u0001\u0001\u0001\u0001\u0000\u0000\u00012", new Object[]{"flags_", C0688c.f50303a});
            case 4:
                return f50299q;
            case 5:
                q0 q0Var2 = f50300r;
                if (q0Var2 == null) {
                    synchronized (c.class) {
                        try {
                            q0Var = f50300r;
                            if (q0Var == null) {
                                q0Var = new s.b(f50299q);
                                f50300r = q0Var;
                            }
                        } catch (Throwable th2) {
                            throw th2;
                        }
                    }
                    return q0Var;
                }
                return q0Var2;
            case 6:
                return (byte) 1;
            case 7:
                return null;
            default:
                throw new UnsupportedOperationException();
        }
    }
}
