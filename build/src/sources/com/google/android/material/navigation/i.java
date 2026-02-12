package com.google.android.material.navigation;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.appcompat.view.menu.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements androidx.appcompat.view.menu.j {

    /* renamed from: d  reason: collision with root package name */
    private h f16035d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f16036e = false;

    /* renamed from: i  reason: collision with root package name */
    private int f16037i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a implements Parcelable {
        public static final Parcelable.Creator<a> CREATOR = new C0186a();

        /* renamed from: d  reason: collision with root package name */
        int f16038d;

        /* renamed from: e  reason: collision with root package name */
        com.google.android.material.internal.g f16039e;

        /* renamed from: com.google.android.material.navigation.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class C0186a implements Parcelable.Creator {
            C0186a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public a createFromParcel(Parcel parcel) {
                return new a(parcel);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public a[] newArray(int i10) {
                return new a[i10];
            }
        }

        a() {
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f16038d);
            parcel.writeParcelable(this.f16039e, 0);
        }

        a(Parcel parcel) {
            this.f16038d = parcel.readInt();
            this.f16039e = (com.google.android.material.internal.g) parcel.readParcelable(getClass().getClassLoader());
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public void a(androidx.appcompat.view.menu.e eVar, boolean z10) {
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean b(androidx.appcompat.view.menu.e eVar, androidx.appcompat.view.menu.g gVar) {
        return false;
    }

    @Override // androidx.appcompat.view.menu.j
    public void d(Parcelable parcelable) {
        if (parcelable instanceof a) {
            a aVar = (a) parcelable;
            this.f16035d.s(aVar.f16038d);
            this.f16035d.q(dh.c.c(this.f16035d.getContext(), aVar.f16039e));
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean e(m mVar) {
        return false;
    }

    @Override // androidx.appcompat.view.menu.j
    public Parcelable f() {
        a aVar = new a();
        aVar.f16038d = this.f16035d.getSelectedItemId();
        aVar.f16039e = dh.c.d(this.f16035d.getBadgeDrawables());
        return aVar;
    }

    @Override // androidx.appcompat.view.menu.j
    public void g(boolean z10) {
        if (this.f16036e) {
            return;
        }
        if (z10) {
            this.f16035d.d();
        } else {
            this.f16035d.t();
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public int getId() {
        return this.f16037i;
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean h() {
        return false;
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean i(androidx.appcompat.view.menu.e eVar, androidx.appcompat.view.menu.g gVar) {
        return false;
    }

    @Override // androidx.appcompat.view.menu.j
    public void j(Context context, androidx.appcompat.view.menu.e eVar) {
        this.f16035d.a(eVar);
    }

    public void k(int i10) {
        this.f16037i = i10;
    }

    public void l(h hVar) {
        this.f16035d = hVar;
    }

    public void m(boolean z10) {
        this.f16036e = z10;
    }
}
