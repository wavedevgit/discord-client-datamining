package vg;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.location.LocationRequest;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends jf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new j();

    /* renamed from: d  reason: collision with root package name */
    private final List f52346d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f52347e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f52348i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final ArrayList f52349a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private boolean f52350b = false;

        /* renamed from: c  reason: collision with root package name */
        private boolean f52351c = false;

        public a a(LocationRequest locationRequest) {
            if (locationRequest != null) {
                this.f52349a.add(locationRequest);
            }
            return this;
        }

        public d b() {
            return new d(this.f52349a, this.f52350b, this.f52351c);
        }

        public a c(boolean z10) {
            this.f52350b = z10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(List list, boolean z10, boolean z11) {
        this.f52346d = list;
        this.f52347e = z10;
        this.f52348i = z11;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        List list = this.f52346d;
        int a10 = jf.c.a(parcel);
        jf.c.w(parcel, 1, Collections.unmodifiableList(list), false);
        jf.c.c(parcel, 2, this.f52347e);
        jf.c.c(parcel, 3, this.f52348i);
        jf.c.b(parcel, a10);
    }
}
