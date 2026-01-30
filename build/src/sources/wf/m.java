package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import java.util.Locale;
import wf.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum m implements Parcelable {
    NOT_SUPPORTED_ERR(9),
    INVALID_STATE_ERR(11),
    SECURITY_ERR(18),
    NETWORK_ERR(19),
    ABORT_ERR(20),
    TIMEOUT_ERR(23),
    ENCODING_ERR(27),
    UNKNOWN_ERR(28),
    CONSTRAINT_ERR(29),
    DATA_ERR(30),
    NOT_ALLOWED_ERR(35),
    ATTESTATION_NOT_PRIVATE_ERR(36);
    
    @NonNull
    public static final Parcelable.Creator<m> CREATOR = new Parcelable.Creator() { // from class: wf.v1
        @Override // android.os.Parcelable.Creator
        public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
            try {
                return m.d(parcel.readInt());
            } catch (m.a e10) {
                throw new IllegalArgumentException(e10);
            }
        }

        @Override // android.os.Parcelable.Creator
        public final /* synthetic */ Object[] newArray(int i10) {
            return new m[i10];
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final int f52520d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends Exception {
        public a(int i10) {
            super(String.format(Locale.US, "Error code %d is not supported", Integer.valueOf(i10)));
        }
    }

    m(int i10) {
        this.f52520d = i10;
    }

    public static m d(int i10) {
        m[] values;
        for (m mVar : values()) {
            if (i10 == mVar.f52520d) {
                return mVar;
            }
        }
        throw new a(i10);
    }

    public int a() {
        return this.f52520d;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f52520d);
    }
}
