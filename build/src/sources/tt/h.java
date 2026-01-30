package tt;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface h {

    /* renamed from: a  reason: collision with root package name */
    public static final a f49941a = a.f49943a;

    /* renamed from: b  reason: collision with root package name */
    public static final h f49942b = new a.C0657a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ a f49943a = new a();

        /* renamed from: tt.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        private static final class C0657a implements h {
            @Override // tt.h
            public List lookup(String hostname) {
                Intrinsics.checkNotNullParameter(hostname, "hostname");
                try {
                    InetAddress[] allByName = InetAddress.getAllByName(hostname);
                    Intrinsics.checkNotNullExpressionValue(allByName, "getAllByName(hostname)");
                    return kotlin.collections.i.R0(allByName);
                } catch (NullPointerException e10) {
                    UnknownHostException unknownHostException = new UnknownHostException("Broken system behaviour for dns lookup of " + hostname);
                    unknownHostException.initCause(e10);
                    throw unknownHostException;
                }
            }
        }

        private a() {
        }
    }

    List lookup(String str);
}
