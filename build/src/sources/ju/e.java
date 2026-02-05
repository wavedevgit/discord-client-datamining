package ju;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.util.Arrays;
import java.util.List;
import javax.net.ssl.SSLSocket;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e extends h {

    /* renamed from: i  reason: collision with root package name */
    public static final b f31427i = new b(null);

    /* renamed from: d  reason: collision with root package name */
    private final Method f31428d;

    /* renamed from: e  reason: collision with root package name */
    private final Method f31429e;

    /* renamed from: f  reason: collision with root package name */
    private final Method f31430f;

    /* renamed from: g  reason: collision with root package name */
    private final Class f31431g;

    /* renamed from: h  reason: collision with root package name */
    private final Class f31432h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements InvocationHandler {

        /* renamed from: a  reason: collision with root package name */
        private final List f31433a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f31434b;

        /* renamed from: c  reason: collision with root package name */
        private String f31435c;

        public a(List protocols) {
            Intrinsics.checkNotNullParameter(protocols, "protocols");
            this.f31433a = protocols;
        }

        public final String a() {
            return this.f31435c;
        }

        public final boolean b() {
            return this.f31434b;
        }

        @Override // java.lang.reflect.InvocationHandler
        public Object invoke(Object proxy, Method method, Object[] objArr) {
            Intrinsics.checkNotNullParameter(proxy, "proxy");
            Intrinsics.checkNotNullParameter(method, "method");
            if (objArr == null) {
                objArr = new Object[0];
            }
            String name = method.getName();
            Class<?> returnType = method.getReturnType();
            if (Intrinsics.areEqual(name, "supports") && Intrinsics.areEqual(Boolean.TYPE, returnType)) {
                return Boolean.TRUE;
            }
            if (Intrinsics.areEqual(name, "unsupported") && Intrinsics.areEqual(Void.TYPE, returnType)) {
                this.f31434b = true;
                return null;
            } else if (Intrinsics.areEqual(name, "protocols") && objArr.length == 0) {
                return this.f31433a;
            } else {
                if ((Intrinsics.areEqual(name, "selectProtocol") || Intrinsics.areEqual(name, "select")) && Intrinsics.areEqual(String.class, returnType) && objArr.length == 1) {
                    Object obj = objArr[0];
                    if (obj instanceof List) {
                        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.collections.List<*>");
                        List list = (List) obj;
                        int size = list.size();
                        if (size >= 0) {
                            int i10 = 0;
                            while (true) {
                                Object obj2 = list.get(i10);
                                Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.String");
                                String str = (String) obj2;
                                if (this.f31433a.contains(str)) {
                                    this.f31435c = str;
                                    return str;
                                } else if (i10 == size) {
                                    break;
                                } else {
                                    i10++;
                                }
                            }
                        }
                        String str2 = (String) this.f31433a.get(0);
                        this.f31435c = str2;
                        return str2;
                    }
                }
                if ((Intrinsics.areEqual(name, "protocolSelected") || Intrinsics.areEqual(name, "selected")) && objArr.length == 1) {
                    Object obj3 = objArr[0];
                    Intrinsics.checkNotNull(obj3, "null cannot be cast to non-null type kotlin.String");
                    this.f31435c = (String) obj3;
                    return null;
                }
                return method.invoke(this, Arrays.copyOf(objArr, objArr.length));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final h a() {
            String jvmVersion = System.getProperty("java.specification.version", "unknown");
            try {
                Intrinsics.checkNotNullExpressionValue(jvmVersion, "jvmVersion");
                if (Integer.parseInt(jvmVersion) >= 9) {
                    return null;
                }
            } catch (NumberFormatException unused) {
            }
            try {
                Class<?> cls = Class.forName("org.eclipse.jetty.alpn.ALPN", true, null);
                Class<?> cls2 = Class.forName("org.eclipse.jetty.alpn.ALPN$Provider", true, null);
                Class<?> clientProviderClass = Class.forName("org.eclipse.jetty.alpn.ALPN$ClientProvider", true, null);
                Class<?> serverProviderClass = Class.forName("org.eclipse.jetty.alpn.ALPN$ServerProvider", true, null);
                Method putMethod = cls.getMethod("put", SSLSocket.class, cls2);
                Method getMethod = cls.getMethod("get", SSLSocket.class);
                Method removeMethod = cls.getMethod("remove", SSLSocket.class);
                Intrinsics.checkNotNullExpressionValue(putMethod, "putMethod");
                Intrinsics.checkNotNullExpressionValue(getMethod, "getMethod");
                Intrinsics.checkNotNullExpressionValue(removeMethod, "removeMethod");
                Intrinsics.checkNotNullExpressionValue(clientProviderClass, "clientProviderClass");
                Intrinsics.checkNotNullExpressionValue(serverProviderClass, "serverProviderClass");
                return new e(putMethod, getMethod, removeMethod, clientProviderClass, serverProviderClass);
            } catch (ClassNotFoundException | NoSuchMethodException unused2) {
                return null;
            }
        }

        private b() {
        }
    }

    public e(Method putMethod, Method getMethod, Method removeMethod, Class clientProviderClass, Class serverProviderClass) {
        Intrinsics.checkNotNullParameter(putMethod, "putMethod");
        Intrinsics.checkNotNullParameter(getMethod, "getMethod");
        Intrinsics.checkNotNullParameter(removeMethod, "removeMethod");
        Intrinsics.checkNotNullParameter(clientProviderClass, "clientProviderClass");
        Intrinsics.checkNotNullParameter(serverProviderClass, "serverProviderClass");
        this.f31428d = putMethod;
        this.f31429e = getMethod;
        this.f31430f = removeMethod;
        this.f31431g = clientProviderClass;
        this.f31432h = serverProviderClass;
    }

    @Override // ju.h
    public void b(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        try {
            this.f31430f.invoke(null, sslSocket);
        } catch (IllegalAccessException e10) {
            throw new AssertionError("failed to remove ALPN", e10);
        } catch (InvocationTargetException e11) {
            throw new AssertionError("failed to remove ALPN", e11);
        }
    }

    @Override // ju.h
    public void e(SSLSocket sslSocket, String str, List protocols) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        try {
            this.f31428d.invoke(null, sslSocket, Proxy.newProxyInstance(h.class.getClassLoader(), new Class[]{this.f31431g, this.f31432h}, new a(h.f31441a.b(protocols))));
        } catch (IllegalAccessException e10) {
            throw new AssertionError("failed to set ALPN", e10);
        } catch (InvocationTargetException e11) {
            throw new AssertionError("failed to set ALPN", e11);
        }
    }

    @Override // ju.h
    public String h(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        try {
            InvocationHandler invocationHandler = Proxy.getInvocationHandler(this.f31429e.invoke(null, sslSocket));
            Intrinsics.checkNotNull(invocationHandler, "null cannot be cast to non-null type okhttp3.internal.platform.Jdk8WithJettyBootPlatform.AlpnProvider");
            a aVar = (a) invocationHandler;
            if (!aVar.b() && aVar.a() == null) {
                h.l(this, "ALPN callback dropped: HTTP/2 is disabled. Is alpn-boot on the boot class path?", 0, null, 6, null);
                return null;
            } else if (aVar.b()) {
                return null;
            } else {
                return aVar.a();
            }
        } catch (IllegalAccessException e10) {
            throw new AssertionError("failed to get ALPN selected protocol", e10);
        } catch (InvocationTargetException e11) {
            throw new AssertionError("failed to get ALPN selected protocol", e11);
        }
    }
}
