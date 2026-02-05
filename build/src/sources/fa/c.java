package fa;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: c  reason: collision with root package name */
    public static final a f22711c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    public static final c f22712d = new c("UNKNOWN", null);

    /* renamed from: a  reason: collision with root package name */
    private final String f22713a;

    /* renamed from: b  reason: collision with root package name */
    private final String f22714b;

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
        this.f22713a = name;
        this.f22714b = str;
    }

    public final String a() {
        return this.f22713a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f22713a, cVar.f22713a) && Intrinsics.areEqual(this.f22714b, cVar.f22714b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = this.f22713a.hashCode() * 31;
        String str = this.f22714b;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        return this.f22713a;
    }
}
