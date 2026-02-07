package ug;

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
    private final List f51486d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f51487e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f51488i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final ArrayList f51489a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private boolean f51490b = false;

        /* renamed from: c  reason: collision with root package name */
        private boolean f51491c = false;

        public a a(LocationRequest locationRequest) {
            if (locationRequest != null) {
                this.f51489a.add(locationRequest);
            }
            return this;
        }

        public d b() {
            return new d(this.f51489a, this.f51490b, this.f51491c);
        }

        public a c(boolean z10) {
            this.f51490b = z10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(List list, boolean z10, boolean z11) {
        this.f51486d = list;
        this.f51487e = z10;
        this.f51488i = z11;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        List list = this.f51486d;
        int a10 = hf.c.a(parcel);
        hf.c.w(parcel, 1, Collections.unmodifiableList(list), false);
        hf.c.c(parcel, 2, this.f51487e);
        hf.c.c(parcel, 3, this.f51488i);
        hf.c.b(parcel, a10);
    }
}
