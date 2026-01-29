package xf;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends hf.a {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f53307d;

    /* renamed from: e  reason: collision with root package name */
    public static final C0735a f53306e = new C0735a(null);
    @NotNull
    public static final Parcelable.Creator<a> CREATOR = new b();

    /* renamed from: xf.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0735a {
        private C0735a() {
        }

        public /* synthetic */ C0735a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public a(boolean z10) {
        this.f53307d = z10;
    }

    public final boolean b() {
        return this.f53307d;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        b.c(this, dest, i10);
    }
}
