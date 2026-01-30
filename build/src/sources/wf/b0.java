package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum b0 implements Parcelable {
    USER_VERIFICATION_REQUIRED("required"),
    USER_VERIFICATION_PREFERRED("preferred"),
    USER_VERIFICATION_DISCOURAGED("discouraged");
    
    @NonNull
    public static final Parcelable.Creator<b0> CREATOR = new Parcelable.Creator() { // from class: wf.c1
        @Override // android.os.Parcelable.Creator
        public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
            try {
                return b0.a(parcel.readString());
            } catch (d1 e10) {
                throw new RuntimeException(e10);
            }
        }

        @Override // android.os.Parcelable.Creator
        public final /* synthetic */ Object[] newArray(int i10) {
            return new b0[i10];
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final String f52455d;

    b0(String str) {
        this.f52455d = str;
    }

    public static b0 a(String str) {
        b0[] values;
        for (b0 b0Var : values()) {
            if (str.equals(b0Var.f52455d)) {
                return b0Var;
            }
        }
        throw new d1(str);
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // java.lang.Enum
    public final String toString() {
        return this.f52455d;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        parcel.writeString(this.f52455d);
    }
}
