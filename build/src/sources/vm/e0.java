package vm;

import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface e0 {

    /* renamed from: a  reason: collision with root package name */
    public static final a f51237a = a.f51238b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends b0 {

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ a f51238b = new a();

        private a() {
            super(Reflection.getOrCreateKotlinClass(e0.class));
        }

        @Override // vm.b0
        /* renamed from: b */
        public e0 a() {
            return f0.a();
        }
    }

    c0 a(KClass kClass);
}
