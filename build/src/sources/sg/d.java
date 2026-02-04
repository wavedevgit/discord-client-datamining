package sg;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.location.LocationRequest;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends hf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new j();

    /* renamed from: d  reason: collision with root package name */
    private final List f49496d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f49497e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f49498i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final ArrayList f49499a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private boolean f49500b = false;

        /* renamed from: c  reason: collision with root package name */
        private boolean f49501c = false;

        public a a(LocationRequest locationRequest) {
            if (locationRequest != null) {
                this.f49499a.add(locationRequest);
            }
            return this;
        }

        public d b() {
            return new d(this.f49499a, this.f49500b, this.f49501c);
        }

        public a c(boolean z10) {
            this.f49500b = z10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(List list, boolean z10, boolean z11) {
        this.f49496d = list;
        this.f49497e = z10;
        this.f49498i = z11;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        List list = this.f49496d;
        int a10 = hf.c.a(parcel);
        hf.c.w(parcel, 1, Collections.unmodifiableList(list), false);
        hf.c.c(parcel, 2, this.f49497e);
        hf.c.c(parcel, 3, this.f49498i);
        hf.c.b(parcel, a10);
    }
}
