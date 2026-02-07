package mu;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.List;
import javax.net.ssl.SSLSocket;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Charsets;
import kotlin.text.StringsKt;
import mu.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f implements k {

    /* renamed from: f  reason: collision with root package name */
    public static final a f38354f;

    /* renamed from: g  reason: collision with root package name */
    private static final j.a f38355g;

    /* renamed from: a  reason: collision with root package name */
    private final Class f38356a;

    /* renamed from: b  reason: collision with root package name */
    private final Method f38357b;

    /* renamed from: c  reason: collision with root package name */
    private final Method f38358c;

    /* renamed from: d  reason: collision with root package name */
    private final Method f38359d;

    /* renamed from: e  reason: collision with root package name */
    private final Method f38360e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: mu.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0525a implements j.a {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ String f38361a;

            C0525a(String str) {
                this.f38361a = str;
            }

            @Override // mu.j.a
            public boolean b(SSLSocket sslSocket) {
                Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
                String name = sslSocket.getClass().getName();
                Intrinsics.checkNotNullExpressionValue(name, "sslSocket.javaClass.name");
                return StringsKt.P(name, this.f38361a + '.', false, 2, null);
            }

            @Override // mu.j.a
            public k c(SSLSocket sslSocket) {
                Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
                return f.f38354f.b(sslSocket.getClass());
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
            return new C0525a(packageName);
        }

        public final j.a d() {
            return f.f38355g;
        }

        private a() {
        }
    }

    static {
        a aVar = new a(null);
        f38354f = aVar;
        f38355g = aVar.c("com.google.android.gms.org.conscrypt");
    }

    public f(Class sslSocketClass) {
        Intrinsics.checkNotNullParameter(sslSocketClass, "sslSocketClass");
        this.f38356a = sslSocketClass;
        Method declaredMethod = sslSocketClass.getDeclaredMethod("setUseSessionTickets", Boolean.TYPE);
        Intrinsics.checkNotNullExpressionValue(declaredMethod, "sslSocketClass.getDeclar…:class.javaPrimitiveType)");
        this.f38357b = declaredMethod;
        this.f38358c = sslSocketClass.getMethod("setHostname", String.class);
        this.f38359d = sslSocketClass.getMethod("getAlpnSelectedProtocol", null);
        this.f38360e = sslSocketClass.getMethod("setAlpnProtocols", byte[].class);
    }

    @Override // mu.k
    public boolean a() {
        return lu.b.f36798f.b();
    }

    @Override // mu.k
    public boolean b(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        return this.f38356a.isInstance(sslSocket);
    }

    @Override // mu.k
    public String c(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        if (!b(sslSocket)) {
            return null;
        }
        try {
            byte[] bArr = (byte[]) this.f38359d.invoke(sslSocket, null);
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

    @Override // mu.k
    public void d(SSLSocket sslSocket, String str, List protocols) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        if (b(sslSocket)) {
            try {
                this.f38357b.invoke(sslSocket, Boolean.TRUE);
                if (str != null) {
                    this.f38358c.invoke(sslSocket, str);
                }
                this.f38360e.invoke(sslSocket, lu.h.f36825a.c(protocols));
            } catch (IllegalAccessException e10) {
                throw new AssertionError(e10);
            } catch (InvocationTargetException e11) {
                throw new AssertionError(e11);
            }
        }
    }
}
