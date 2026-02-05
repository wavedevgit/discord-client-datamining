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
    final boolean f7295d = false;

    /* renamed from: e  reason: collision with root package name */
    final Handler f7296e = null;

    /* renamed from: i  reason: collision with root package name */
    c.a f7297i;

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
    class BinderC0132b extends a.AbstractBinderC0130a {
        BinderC0132b() {
        }

        @Override // c.a
        public void a0(int i10, Bundle bundle) {
            b bVar = b.this;
            Handler handler = bVar.f7296e;
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
        final int f7299d;

        /* renamed from: e  reason: collision with root package name */
        final Bundle f7300e;

        c(int i10, Bundle bundle) {
            this.f7299d = i10;
            this.f7300e = bundle;
        }

        @Override // java.lang.Runnable
        public void run() {
            b.this.a(this.f7299d, this.f7300e);
        }
    }

    b(Parcel parcel) {
        this.f7297i = a.AbstractBinderC0130a.e(parcel.readStrongBinder());
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        synchronized (this) {
            try {
                if (this.f7297i == null) {
                    this.f7297i = new BinderC0132b();
                }
                parcel.writeStrongBinder(this.f7297i.asBinder());
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    protected void a(int i10, Bundle bundle) {
    }
}
