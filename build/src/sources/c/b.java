package c;

import android.os.Bundle;
import android.os.Handler;
import android.os.Parcel;
import android.os.Parcelable;
import c.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements Parcelable {
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    final boolean f8034d = false;

    /* renamed from: e  reason: collision with root package name */
    final Handler f8035e = null;

    /* renamed from: i  reason: collision with root package name */
    c.a f8036i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public b createFromParcel(Parcel parcel) {
            return new b(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public b[] newArray(int i10) {
            return new b[i10];
        }
    }

    /* renamed from: c.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class BinderC0129b extends a.AbstractBinderC0127a {
        BinderC0129b() {
        }

        @Override // c.a
        public void T(int i10, Bundle bundle) {
            b bVar = b.this;
            Handler handler = bVar.f8035e;
            if (handler != null) {
                handler.post(new c(i10, bundle));
            } else {
                bVar.a(i10, bundle);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final int f8038d;

        /* renamed from: e  reason: collision with root package name */
        final Bundle f8039e;

        c(int i10, Bundle bundle) {
            this.f8038d = i10;
            this.f8039e = bundle;
        }

        @Override // java.lang.Runnable
        public void run() {
            b.this.a(this.f8038d, this.f8039e);
        }
    }

    b(Parcel parcel) {
        this.f8036i = a.AbstractBinderC0127a.e(parcel.readStrongBinder());
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        synchronized (this) {
            try {
                if (this.f8036i == null) {
                    this.f8036i = new BinderC0129b();
                }
                parcel.writeStrongBinder(this.f8036i.asBinder());
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    protected void a(int i10, Bundle bundle) {
    }
}
