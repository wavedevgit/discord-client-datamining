package hu;

import hu.j;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.List;
import javax.net.ssl.SSLSocket;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Charsets;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f implements k {

    /* renamed from: f  reason: collision with root package name */
    public static final a f28163f;

    /* renamed from: g  reason: collision with root package name */
    private static final j.a f28164g;

    /* renamed from: a  reason: collision with root package name */
    private final Class f28165a;

    /* renamed from: b  reason: collision with root package name */
    private final Method f28166b;

    /* renamed from: c  reason: collision with root package name */
    private final Method f28167c;

    /* renamed from: d  reason: collision with root package name */
    private final Method f28168d;

    /* renamed from: e  reason: collision with root package name */
    private final Method f28169e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: hu.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0370a implements j.a {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ String f28170a;

            C0370a(String str) {
                this.f28170a = str;
            }

            @Override // hu.j.a
            public boolean b(SSLSocket sslSocket) {
                Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
                String name = sslSocket.getClass().getName();
                Intrinsics.checkNotNullExpressionValue(name, "sslSocket.javaClass.name");
                return StringsKt.P(name, this.f28170a + '.', false, 2, null);
            }

            @Override // hu.j.a
            public k c(SSLSocket sslSocket) {
                Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
                return f.f28163f.b(sslSocket.getClass());
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
            return new C0370a(packageName);
        }

        public final j.a d() {
            return f.f28164g;
        }

        private a() {
        }
    }

    static {
        a aVar = new a(null);
        f28163f = aVar;
        f28164g = aVar.c("com.google.android.gms.org.conscrypt");
    }

    public f(Class sslSocketClass) {
        Intrinsics.checkNotNullParameter(sslSocketClass, "sslSocketClass");
        this.f28165a = sslSocketClass;
        Method declaredMethod = sslSocketClass.getDeclaredMethod("setUseSessionTickets", Boolean.TYPE);
        Intrinsics.checkNotNullExpressionValue(declaredMethod, "sslSocketClass.getDeclar…:class.javaPrimitiveType)");
        this.f28166b = declaredMethod;
        this.f28167c = sslSocketClass.getMethod("setHostname", String.class);
        this.f28168d = sslSocketClass.getMethod("getAlpnSelectedProtocol", null);
        this.f28169e = sslSocketClass.getMethod("setAlpnProtocols", byte[].class);
    }

    @Override // hu.k
    public boolean a() {
        return gu.b.f26623f.b();
    }

    @Override // hu.k
    public boolean b(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        return this.f28165a.isInstance(sslSocket);
    }

    @Override // hu.k
    public String c(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        if (!b(sslSocket)) {
            return null;
        }
        try {
            byte[] bArr = (byte[]) this.f28168d.invoke(sslSocket, null);
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

    @Override // hu.k
    public void d(SSLSocket sslSocket, String str, List protocols) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        if (b(sslSocket)) {
            try {
                this.f28166b.invoke(sslSocket, Boolean.TRUE);
                if (str != null) {
                    this.f28167c.invoke(sslSocket, str);
                }
                this.f28169e.invoke(sslSocket, gu.h.f26650a.c(protocols));
            } catch (IllegalAccessException e10) {
                throw new AssertionError(e10);
            } catch (InvocationTargetException e11) {
                throw new AssertionError(e11);
            }
        }
    }
}
