package jt;

import ht.l;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c1 implements SerialDescriptor {

    /* renamed from: a  reason: collision with root package name */
    private final String f31025a;

    /* renamed from: b  reason: collision with root package name */
    private final SerialDescriptor f31026b;

    /* renamed from: c  reason: collision with root package name */
    private final SerialDescriptor f31027c;

    /* renamed from: d  reason: collision with root package name */
    private final int f31028d;

    public /* synthetic */ c1(String str, SerialDescriptor serialDescriptor, SerialDescriptor serialDescriptor2, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, serialDescriptor, serialDescriptor2);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean b() {
        return SerialDescriptor.a.c(this);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int c(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        Integer intOrNull = StringsKt.toIntOrNull(name);
        if (intOrNull != null) {
            return intOrNull.intValue();
        }
        throw new IllegalArgumentException(name + " is not a valid map index");
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int d() {
        return this.f31028d;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String e(int i10) {
        return String.valueOf(i10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c1)) {
            return false;
        }
        c1 c1Var = (c1) obj;
        if (Intrinsics.areEqual(h(), c1Var.h()) && Intrinsics.areEqual(this.f31026b, c1Var.f31026b) && Intrinsics.areEqual(this.f31027c, c1Var.f31027c)) {
            return true;
        }
        return false;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List f(int i10) {
        if (i10 >= 0) {
            return CollectionsKt.l();
        }
        throw new IllegalArgumentException(("Illegal index " + i10 + ", " + h() + " expects only non-negative indices").toString());
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        if (i10 >= 0) {
            int i11 = i10 % 2;
            if (i11 != 0) {
                if (i11 == 1) {
                    return this.f31027c;
                }
                throw new IllegalStateException("Unreached");
            }
            return this.f31026b;
        }
        throw new IllegalArgumentException(("Illegal index " + i10 + ", " + h() + " expects only non-negative indices").toString());
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List getAnnotations() {
        return SerialDescriptor.a.a(this);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public ht.k getKind() {
        return l.c.f26539a;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return this.f31025a;
    }

    public int hashCode() {
        return (((h().hashCode() * 31) + this.f31026b.hashCode()) * 31) + this.f31027c.hashCode();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean i(int i10) {
        if (i10 >= 0) {
            return false;
        }
        throw new IllegalArgumentException(("Illegal index " + i10 + ", " + h() + " expects only non-negative indices").toString());
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean isInline() {
        return SerialDescriptor.a.b(this);
    }

    public String toString() {
        return h() + '(' + this.f31026b + ", " + this.f31027c + ')';
    }

    private c1(String str, SerialDescriptor serialDescriptor, SerialDescriptor serialDescriptor2) {
        this.f31025a = str;
        this.f31026b = serialDescriptor;
        this.f31027c = serialDescriptor2;
        this.f31028d = 2;
    }
}
