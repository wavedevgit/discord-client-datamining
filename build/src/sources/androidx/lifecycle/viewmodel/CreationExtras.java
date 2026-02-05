package androidx.lifecycle.viewmodel;

import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class CreationExtras {

    /* renamed from: b  reason: collision with root package name */
    public static final a f4654b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Map f4655a = new LinkedHashMap();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends CreationExtras {

        /* renamed from: c  reason: collision with root package name */
        public static final b f4656c = new b();

        private b() {
        }

        @Override // androidx.lifecycle.viewmodel.CreationExtras
        public Object a(c key) {
            Intrinsics.checkNotNullParameter(key, "key");
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface c {
    }

    public abstract Object a(c cVar);

    public final Map b() {
        return this.f4655a;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof CreationExtras) && Intrinsics.areEqual(this.f4655a, ((CreationExtras) obj).f4655a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f4655a.hashCode();
    }

    public String toString() {
        return "CreationExtras(extras=" + this.f4655a + ')';
    }
}
