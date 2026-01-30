package pr;

import java.io.Serializable;
import kotlin.collections.d;
import kotlin.collections.i;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends d implements EnumEntries, Serializable {

    /* renamed from: e  reason: collision with root package name */
    private final Enum[] f46172e;

    public b(Enum[] entries) {
        Intrinsics.checkNotNullParameter(entries, "entries");
        this.f46172e = entries;
    }

    @Override // kotlin.collections.b
    public int c() {
        return this.f46172e.length;
    }

    @Override // kotlin.collections.b, java.util.Collection, java.util.List
    public final /* bridge */ boolean contains(Object obj) {
        if (!(obj instanceof Enum)) {
            return false;
        }
        return e((Enum) obj);
    }

    public boolean e(Enum element) {
        Intrinsics.checkNotNullParameter(element, "element");
        if (((Enum) i.c0(this.f46172e, element.ordinal())) == element) {
            return true;
        }
        return false;
    }

    @Override // kotlin.collections.d, java.util.List
    /* renamed from: f */
    public Enum get(int i10) {
        d.f33332d.b(i10, this.f46172e.length);
        return this.f46172e[i10];
    }

    public int g(Enum element) {
        Intrinsics.checkNotNullParameter(element, "element");
        int ordinal = element.ordinal();
        if (((Enum) i.c0(this.f46172e, ordinal)) == element) {
            return ordinal;
        }
        return -1;
    }

    public int h(Enum element) {
        Intrinsics.checkNotNullParameter(element, "element");
        return indexOf(element);
    }

    @Override // kotlin.collections.d, java.util.List
    public final /* bridge */ int indexOf(Object obj) {
        if (!(obj instanceof Enum)) {
            return -1;
        }
        return g((Enum) obj);
    }

    @Override // kotlin.collections.d, java.util.List
    public final /* bridge */ int lastIndexOf(Object obj) {
        if (!(obj instanceof Enum)) {
            return -1;
        }
        return h((Enum) obj);
    }
}
