package d;

import android.content.Intent;
import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final int f20057d;

    /* renamed from: e  reason: collision with root package name */
    private final Intent f20058e;

    /* renamed from: i  reason: collision with root package name */
    public static final b f20056i = new b(null);
    @NotNull
    public static final Parcelable.Creator<a> CREATOR = new C0263a();

    /* renamed from: d.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0263a implements Parcelable.Creator {
        C0263a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public a createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new a(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public a[] newArray(int i10) {
            return new a[i10];
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String a(int i10) {
            if (i10 != -1) {
                if (i10 != 0) {
                    return String.valueOf(i10);
                }
                return "RESULT_CANCELED";
            }
            return "RESULT_OK";
        }

        private b() {
        }
    }

    public a(int i10, Intent intent) {
        this.f20057d = i10;
        this.f20058e = intent;
    }

    public final Intent a() {
        return this.f20058e;
    }

    public final int b() {
        return this.f20057d;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        return "ActivityResult{resultCode=" + f20056i.a(this.f20057d) + ", data=" + this.f20058e + '}';
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel dest, int i10) {
        int i11;
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeInt(this.f20057d);
        if (this.f20058e == null) {
            i11 = 0;
        } else {
            i11 = 1;
        }
        dest.writeInt(i11);
        Intent intent = this.f20058e;
        if (intent != null) {
            intent.writeToParcel(dest, i10);
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public a(Parcel parcel) {
        this(parcel.readInt(), parcel.readInt() == 0 ? null : (Intent) Intent.CREATOR.createFromParcel(parcel));
        Intrinsics.checkNotNullParameter(parcel, "parcel");
    }
}
