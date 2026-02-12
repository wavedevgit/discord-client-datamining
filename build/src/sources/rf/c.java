package rf;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends jf.a {

    /* renamed from: d  reason: collision with root package name */
    private final int f46545d;

    /* renamed from: e  reason: collision with root package name */
    public static final a f46544e = new a(null);
    @NotNull
    public static final Parcelable.Creator<c> CREATOR = new d();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        }
    }

    public c(int i10) {
        this.f46545d = i10;
    }

    public final int b() {
        return this.f46545d;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        int a10 = jf.c.a(dest);
        jf.c.l(dest, 1, b());
        jf.c.b(dest, a10);
    }
}
