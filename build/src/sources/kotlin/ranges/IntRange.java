package kotlin.ranges;

import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0002\u0010\u0000\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\t\n\u0002\u0010\u000e\n\u0002\b\b\u0018\u0000 \u001a2\u00020\u00012\b\u0012\u0004\u0012\u00020\u00030\u00022\b\u0012\u0004\u0012\u00020\u00030\u0004:\u0001\u001bB\u0017\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003¢\u0006\u0004\b\u0007\u0010\bJ\u0018\u0010\u000b\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u0003H\u0096\u0002¢\u0006\u0004\b\u000b\u0010\fJ\u000f\u0010\r\u001a\u00020\nH\u0016¢\u0006\u0004\b\r\u0010\u000eJ\u001a\u0010\u0010\u001a\u00020\n2\b\u0010\u000f\u001a\u0004\u0018\u00010\u0004H\u0096\u0002¢\u0006\u0004\b\u0010\u0010\u0011J\u000f\u0010\u0012\u001a\u00020\u0003H\u0016¢\u0006\u0004\b\u0012\u0010\u0013J\u000f\u0010\u0015\u001a\u00020\u0014H\u0016¢\u0006\u0004\b\u0015\u0010\u0016R\u0014\u0010\u0005\u001a\u00020\u00038VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0017\u0010\u0018R\u0014\u0010\u0006\u001a\u00020\u00038VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0019\u0010\u0018¨\u0006\u001c"}, d2 = {"Lkotlin/ranges/IntRange;", "Lkotlin/ranges/a;", "Lzr/a;", "", "", ViewProps.START, "endInclusive", "<init>", "(II)V", "value", "", "contains", "(I)Z", "isEmpty", "()Z", "other", "equals", "(Ljava/lang/Object;)Z", "hashCode", "()I", "", "toString", "()Ljava/lang/String;", "j", "()Ljava/lang/Integer;", "i", "p", "a", "kotlin-stdlib"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class IntRange extends kotlin.ranges.a implements zr.a {
    @NotNull

    /* renamed from: p  reason: collision with root package name */
    public static final a f33390p = new a(null);

    /* renamed from: q  reason: collision with root package name */
    private static final IntRange f33391q = new IntRange(1, 0);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final IntRange a() {
            return IntRange.f33391q;
        }

        private a() {
        }
    }

    public IntRange(int i10, int i11) {
        super(i10, i11, 1);
    }

    public boolean contains(int i10) {
        if (d() <= i10 && i10 <= e()) {
            return true;
        }
        return false;
    }

    @Override // kotlin.ranges.a
    public boolean equals(Object obj) {
        if (obj instanceof IntRange) {
            if (!isEmpty() || !((IntRange) obj).isEmpty()) {
                IntRange intRange = (IntRange) obj;
                if (d() == intRange.d() && e() == intRange.e()) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return false;
    }

    @Override // kotlin.ranges.a
    public int hashCode() {
        if (isEmpty()) {
            return -1;
        }
        return (d() * 31) + e();
    }

    @Override // zr.a
    /* renamed from: i */
    public Integer c() {
        return Integer.valueOf(e());
    }

    @Override // kotlin.ranges.a, zr.a
    public boolean isEmpty() {
        if (d() > e()) {
            return true;
        }
        return false;
    }

    @Override // zr.a
    /* renamed from: j */
    public Integer b() {
        return Integer.valueOf(d());
    }

    @Override // kotlin.ranges.a
    public String toString() {
        return d() + ".." + e();
    }
}
