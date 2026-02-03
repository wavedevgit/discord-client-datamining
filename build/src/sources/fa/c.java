package fa;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: c  reason: collision with root package name */
    public static final a f23686c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    public static final c f23687d = new c("UNKNOWN", null);

    /* renamed from: a  reason: collision with root package name */
    private final String f23688a;

    /* renamed from: b  reason: collision with root package name */
    private final String f23689b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        c a(byte[] bArr, int i10);

        int b();
    }

    public c(String name, String str) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f23688a = name;
        this.f23689b = str;
    }

    public final String a() {
        return this.f23688a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f23688a, cVar.f23688a) && Intrinsics.areEqual(this.f23689b, cVar.f23689b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = this.f23688a.hashCode() * 31;
        String str = this.f23689b;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        return this.f23688a;
    }
}
