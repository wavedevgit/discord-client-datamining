package j2;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    public static final a f29756a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final Object b(i2.e eVar, String str, Object obj) {
            if (obj instanceof j2.a) {
                return new j2.a(eVar, str);
            }
            if (obj instanceof d) {
                return new d(eVar, str);
            }
            throw new k2.b();
        }

        private a() {
        }
    }
}
