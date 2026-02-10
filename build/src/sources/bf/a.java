package bf;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends jf.a {

    /* renamed from: d  reason: collision with root package name */
    private final Bundle f6588d;

    /* renamed from: e  reason: collision with root package name */
    public static final C0135a f6587e = new C0135a(null);
    @NotNull
    public static final Parcelable.Creator<a> CREATOR = new b();

    /* renamed from: bf.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0135a {
        private C0135a() {
        }

        public /* synthetic */ C0135a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public a(Bundle requestBundle) {
        Intrinsics.checkNotNullParameter(requestBundle, "requestBundle");
        this.f6588d = requestBundle;
    }

    public final Bundle b() {
        return this.f6588d;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        b.c(this, dest, i10);
    }
}
