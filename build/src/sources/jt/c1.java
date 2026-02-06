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
    private final String f30977a;

    /* renamed from: b  reason: collision with root package name */
    private final SerialDescriptor f30978b;

    /* renamed from: c  reason: collision with root package name */
    private final SerialDescriptor f30979c;

    /* renamed from: d  reason: collision with root package name */
    private final int f30980d;

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
        return this.f30980d;
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
        if (Intrinsics.areEqual(h(), c1Var.h()) && Intrinsics.areEqual(this.f30978b, c1Var.f30978b) && Intrinsics.areEqual(this.f30979c, c1Var.f30979c)) {
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
                    return this.f30979c;
                }
                throw new IllegalStateException("Unreached");
            }
            return this.f30978b;
        }
        throw new IllegalArgumentException(("Illegal index " + i10 + ", " + h() + " expects only non-negative indices").toString());
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List getAnnotations() {
        return SerialDescriptor.a.a(this);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public ht.k getKind() {
        return l.c.f26491a;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return this.f30977a;
    }

    public int hashCode() {
        return (((h().hashCode() * 31) + this.f30978b.hashCode()) * 31) + this.f30979c.hashCode();
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
        return h() + '(' + this.f30978b + ", " + this.f30979c + ')';
    }

    private c1(String str, SerialDescriptor serialDescriptor, SerialDescriptor serialDescriptor2) {
        this.f30977a = str;
        this.f30978b = serialDescriptor;
        this.f30979c = serialDescriptor2;
        this.f30980d = 2;
    }
}
