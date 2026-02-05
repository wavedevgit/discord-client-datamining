package ku;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.List;
import javax.net.ssl.SSLSocket;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Charsets;
import kotlin.text.StringsKt;
import ku.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f implements k {

    /* renamed from: f  reason: collision with root package name */
    public static final a f36150f;

    /* renamed from: g  reason: collision with root package name */
    private static final j.a f36151g;

    /* renamed from: a  reason: collision with root package name */
    private final Class f36152a;

    /* renamed from: b  reason: collision with root package name */
    private final Method f36153b;

    /* renamed from: c  reason: collision with root package name */
    private final Method f36154c;

    /* renamed from: d  reason: collision with root package name */
    private final Method f36155d;

    /* renamed from: e  reason: collision with root package name */
    private final Method f36156e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: ku.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0471a implements j.a {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ String f36157a;

            C0471a(String str) {
                this.f36157a = str;
            }

            @Override // ku.j.a
            public boolean b(SSLSocket sslSocket) {
                Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
                String name = sslSocket.getClass().getName();
                Intrinsics.checkNotNullExpressionValue(name, "sslSocket.javaClass.name");
                return StringsKt.P(name, this.f36157a + '.', false, 2, null);
            }

            @Override // ku.j.a
            public k c(SSLSocket sslSocket) {
                Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
                return f.f36150f.b(sslSocket.getClass());
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
            return new C0471a(packageName);
        }

        public final j.a d() {
            return f.f36151g;
        }

        private a() {
        }
    }

    static {
        a aVar = new a(null);
        f36150f = aVar;
        f36151g = aVar.c("com.google.android.gms.org.conscrypt");
    }

    public f(Class sslSocketClass) {
        Intrinsics.checkNotNullParameter(sslSocketClass, "sslSocketClass");
        this.f36152a = sslSocketClass;
        Method declaredMethod = sslSocketClass.getDeclaredMethod("setUseSessionTickets", Boolean.TYPE);
        Intrinsics.checkNotNullExpressionValue(declaredMethod, "sslSocketClass.getDeclar…:class.javaPrimitiveType)");
        this.f36153b = declaredMethod;
        this.f36154c = sslSocketClass.getMethod("setHostname", String.class);
        this.f36155d = sslSocketClass.getMethod("getAlpnSelectedProtocol", null);
        this.f36156e = sslSocketClass.getMethod("setAlpnProtocols", byte[].class);
    }

    @Override // ku.k
    public boolean a() {
        return ju.b.f31414f.b();
    }

    @Override // ku.k
    public boolean b(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        return this.f36152a.isInstance(sslSocket);
    }

    @Override // ku.k
    public String c(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        if (!b(sslSocket)) {
            return null;
        }
        try {
            byte[] bArr = (byte[]) this.f36155d.invoke(sslSocket, null);
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

    @Override // ku.k
    public void d(SSLSocket sslSocket, String str, List protocols) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        if (b(sslSocket)) {
            try {
                this.f36153b.invoke(sslSocket, Boolean.TRUE);
                if (str != null) {
                    this.f36154c.invoke(sslSocket, str);
                }
                this.f36156e.invoke(sslSocket, ju.h.f31441a.c(protocols));
            } catch (IllegalAccessException e10) {
                throw new AssertionError(e10);
            } catch (InvocationTargetException e11) {
                throw new AssertionError(e11);
            }
        }
    }
}
