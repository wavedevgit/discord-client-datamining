package vn;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<l> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final u f51471d;

    /* renamed from: e  reason: collision with root package name */
    private final b3 f51472e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final l createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new l(u.CREATOR.createFromParcel(parcel), b3.CREATOR.createFromParcel(parcel));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final l[] newArray(int i10) {
            return new l[i10];
        }
    }

    public l(u documentStartPage, b3 uploadOptionsDialog) {
        Intrinsics.checkNotNullParameter(documentStartPage, "documentStartPage");
        Intrinsics.checkNotNullParameter(uploadOptionsDialog, "uploadOptionsDialog");
        this.f51471d = documentStartPage;
        this.f51472e = uploadOptionsDialog;
    }

    public final u a() {
        return this.f51471d;
    }

    public final b3 b() {
        return this.f51472e;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        this.f51471d.writeToParcel(dest, i10);
        this.f51472e.writeToParcel(dest, i10);
    }
}
