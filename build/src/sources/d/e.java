package d;

import android.content.Intent;
import android.content.IntentSender;
import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final IntentSender f19895d;

    /* renamed from: e  reason: collision with root package name */
    private final Intent f19896e;

    /* renamed from: i  reason: collision with root package name */
    private final int f19897i;

    /* renamed from: o  reason: collision with root package name */
    private final int f19898o;

    /* renamed from: p  reason: collision with root package name */
    public static final c f19894p = new c(null);
    @NotNull
    public static final Parcelable.Creator<e> CREATOR = new b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final IntentSender f19899a;

        /* renamed from: b  reason: collision with root package name */
        private Intent f19900b;

        /* renamed from: c  reason: collision with root package name */
        private int f19901c;

        /* renamed from: d  reason: collision with root package name */
        private int f19902d;

        public a(IntentSender intentSender) {
            Intrinsics.checkNotNullParameter(intentSender, "intentSender");
            this.f19899a = intentSender;
        }

        public final e a() {
            return new e(this.f19899a, this.f19900b, this.f19901c, this.f19902d);
        }

        public final a b(Intent intent) {
            this.f19900b = intent;
            return this;
        }

        public final a c(int i10, int i11) {
            this.f19902d = i10;
            this.f19901c = i11;
            return this;
        }

        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public a(android.app.PendingIntent r2) {
            /*
                r1 = this;
                java.lang.String r0 = "pendingIntent"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
                android.content.IntentSender r2 = r2.getIntentSender()
                java.lang.String r0 = "pendingIntent.intentSender"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, r0)
                r1.<init>(r2)
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: d.e.a.<init>(android.app.PendingIntent):void");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements Parcelable.Creator {
        b() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public e createFromParcel(Parcel inParcel) {
            Intrinsics.checkNotNullParameter(inParcel, "inParcel");
            return new e(inParcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public e[] newArray(int i10) {
            return new e[i10];
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c {
        public /* synthetic */ c(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private c() {
        }
    }

    public e(IntentSender intentSender, Intent intent, int i10, int i11) {
        Intrinsics.checkNotNullParameter(intentSender, "intentSender");
        this.f19895d = intentSender;
        this.f19896e = intent;
        this.f19897i = i10;
        this.f19898o = i11;
    }

    public final Intent a() {
        return this.f19896e;
    }

    public final int b() {
        return this.f19897i;
    }

    public final int c() {
        return this.f19898o;
    }

    public final IntentSender d() {
        return this.f19895d;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeParcelable(this.f19895d, i10);
        dest.writeParcelable(this.f19896e, i10);
        dest.writeInt(this.f19897i);
        dest.writeInt(this.f19898o);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public e(android.os.Parcel r4) {
        /*
            r3 = this;
            java.lang.String r0 = "parcel"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            java.lang.Class<android.content.IntentSender> r0 = android.content.IntentSender.class
            java.lang.ClassLoader r0 = r0.getClassLoader()
            android.os.Parcelable r0 = r4.readParcelable(r0)
            kotlin.jvm.internal.Intrinsics.checkNotNull(r0)
            android.content.IntentSender r0 = (android.content.IntentSender) r0
            java.lang.Class<android.content.Intent> r1 = android.content.Intent.class
            java.lang.ClassLoader r1 = r1.getClassLoader()
            android.os.Parcelable r1 = r4.readParcelable(r1)
            android.content.Intent r1 = (android.content.Intent) r1
            int r2 = r4.readInt()
            int r4 = r4.readInt()
            r3.<init>(r0, r1, r2, r4)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: d.e.<init>(android.os.Parcel):void");
    }
}
