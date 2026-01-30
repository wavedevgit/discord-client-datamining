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
    private final List f49035d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f49036e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f49037i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final ArrayList f49038a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private boolean f49039b = false;

        /* renamed from: c  reason: collision with root package name */
        private boolean f49040c = false;

        public a a(LocationRequest locationRequest) {
            if (locationRequest != null) {
                this.f49038a.add(locationRequest);
            }
            return this;
        }

        public d b() {
            return new d(this.f49038a, this.f49039b, this.f49040c);
        }

        public a c(boolean z10) {
            this.f49039b = z10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(List list, boolean z10, boolean z11) {
        this.f49035d = list;
        this.f49036e = z10;
        this.f49037i = z11;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        List list = this.f49035d;
        int a10 = hf.c.a(parcel);
        hf.c.w(parcel, 1, Collections.unmodifiableList(list), false);
        hf.c.c(parcel, 2, this.f49036e);
        hf.c.c(parcel, 3, this.f49037i);
        hf.c.b(parcel, a10);
    }
}
