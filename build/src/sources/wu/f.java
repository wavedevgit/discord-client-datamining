package wu;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.List;
import javax.net.ssl.SSLSocket;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Charsets;
import kotlin.text.StringsKt;
import wu.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f implements k {

    /* renamed from: f  reason: collision with root package name */
    public static final a f54558f;

    /* renamed from: g  reason: collision with root package name */
    private static final j.a f54559g;

    /* renamed from: a  reason: collision with root package name */
    private final Class f54560a;

    /* renamed from: b  reason: collision with root package name */
    private final Method f54561b;

    /* renamed from: c  reason: collision with root package name */
    private final Method f54562c;

    /* renamed from: d  reason: collision with root package name */
    private final Method f54563d;

    /* renamed from: e  reason: collision with root package name */
    private final Method f54564e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: wu.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0758a implements j.a {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ String f54565a;

            C0758a(String str) {
                this.f54565a = str;
            }

            @Override // wu.j.a
            public boolean b(SSLSocket sslSocket) {
                Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
                String name = sslSocket.getClass().getName();
                Intrinsics.checkNotNullExpressionValue(name, "sslSocket.javaClass.name");
                return StringsKt.P(name, this.f54565a + '.', false, 2, null);
            }

            @Override // wu.j.a
            public k c(SSLSocket sslSocket) {
                Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
                return f.f54558f.b(sslSocket.getClass());
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final f b(Class cls) {
            Class cls2 = cls;
            while (cls2 != null && !Intrinsics.areEqual(cls2.getSimpleName(), "OpenSSLSocketImpl")) {
                cls2 = cls2.getSuperclass();
                if (cls2 == null) {
                    throw new AssertionError("No OpenSSLSocketImpl superclass of socket of type " + cls);
                }
            }
            Intrinsics.checkNotNull(cls2);
            return new f(cls2);
        }

        public final j.a c(String packageName) {
            Intrinsics.checkNotNullParameter(packageName, "packageName");
            return new C0758a(packageName);
        }

        public final j.a d() {
            return f.f54559g;
        }

        private a() {
        }
    }

    static {
        a aVar = new a(null);
        f54558f = aVar;
        f54559g = aVar.c("com.google.android.gms.org.conscrypt");
    }

    public f(Class sslSocketClass) {
        Intrinsics.checkNotNullParameter(sslSocketClass, "sslSocketClass");
        this.f54560a = sslSocketClass;
        Method declaredMethod = sslSocketClass.getDeclaredMethod("setUseSessionTickets", Boolean.TYPE);
        Intrinsics.checkNotNullExpressionValue(declaredMethod, "sslSocketClass.getDeclar…:class.javaPrimitiveType)");
        this.f54561b = declaredMethod;
        this.f54562c = sslSocketClass.getMethod("setHostname", String.class);
        this.f54563d = sslSocketClass.getMethod("getAlpnSelectedProtocol", null);
        this.f54564e = sslSocketClass.getMethod("setAlpnProtocols", byte[].class);
    }

    @Override // wu.k
    public boolean a() {
        return vu.b.f52557f.b();
    }

    @Override // wu.k
    public boolean b(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        return this.f54560a.isInstance(sslSocket);
    }

    @Override // wu.k
    public String c(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        if (!b(sslSocket)) {
            return null;
        }
        try {
            byte[] bArr = (byte[]) this.f54563d.invoke(sslSocket, null);
            if (bArr == null) {
                return null;
            }
            return new String(bArr, Charsets.UTF_8);
        } catch (IllegalAccessException e10) {
            throw new AssertionError(e10);
        } catch (InvocationTargetException e11) {
            Throwable cause = e11.getCause();
            if ((cause instanceof NullPointerException) && Intrinsics.areEqual(((NullPointerException) cause).getMessage(), "ssl == null")) {
                return null;
            }
            throw new AssertionError(e11);
        }
    }

    @Override // wu.k
    public void d(SSLSocket sslSocket, String str, List protocols) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        if (b(sslSocket)) {
            try {
                this.f54561b.invoke(sslSocket, Boolean.TRUE);
                if (str != null) {
                    this.f54562c.invoke(sslSocket, str);
                }
                this.f54564e.invoke(sslSocket, vu.h.f52584a.c(protocols));
            } catch (IllegalAccessException e10) {
                throw new AssertionError(e10);
            } catch (InvocationTargetException e11) {
                throw new AssertionError(e11);
            }
        }
    }
}
