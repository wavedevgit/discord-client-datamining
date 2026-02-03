package xf;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends hf.a {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f53252d;

    /* renamed from: e  reason: collision with root package name */
    public static final C0721a f53251e = new C0721a(null);
    @NotNull
    public static final Parcelable.Creator<a> CREATOR = new b();

    /* renamed from: xf.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0721a {
        private C0721a() {
        }

        public /* synthetic */ C0721a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public a(boolean z10) {
        this.f53252d = z10;
    }

    public final boolean b() {
        return this.f53252d;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        b.c(this, dest, i10);
    }
}
