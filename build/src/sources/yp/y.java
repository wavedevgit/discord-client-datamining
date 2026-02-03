package yp;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements k5, l5 {
    @NotNull
    public static final Parcelable.Creator<y> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f55139d;

    /* renamed from: e  reason: collision with root package name */
    private final List f55140e;

    /* renamed from: i  reason: collision with root package name */
    private final Integer f55141i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final y createFromParcel(Parcel parcel) {
            Integer valueOf;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(parcel.readParcelable(y.class.getClassLoader()));
            }
            if (parcel.readInt() == 0) {
                valueOf = null;
            } else {
                valueOf = Integer.valueOf(parcel.readInt());
            }
            return new y(readString, arrayList, valueOf);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final y[] newArray(int i10) {
            return new y[i10];
        }
    }

    public y(String name, List children, Integer num) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(children, "children");
        this.f55139d = name;
        this.f55140e = children;
        this.f55141i = num;
    }

    public static /* synthetic */ y b(y yVar, String str, List list, Integer num, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = yVar.f55139d;
        }
        if ((i10 & 2) != 0) {
            list = yVar.f55140e;
        }
        if ((i10 & 4) != 0) {
            num = yVar.f55141i;
        }
        return yVar.a(str, list, num);
    }

    @Override // yp.l5
    public l5 O0(List newChildren) {
        Intrinsics.checkNotNullParameter(newChildren, "newChildren");
        return b(this, null, newChildren, null, 5, null);
    }

    public final y a(String name, List children, Integer num) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(children, "children");
        return new y(name, children, num);
    }

    public final Integer c() {
        return this.f55141i;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof y)) {
            return false;
        }
        y yVar = (y) obj;
        if (Intrinsics.areEqual(this.f55139d, yVar.f55139d) && Intrinsics.areEqual(this.f55140e, yVar.f55140e) && Intrinsics.areEqual(this.f55141i, yVar.f55141i)) {
            return true;
        }
        return false;
    }

    @Override // yp.l5
    public List getChildren() {
        return this.f55140e;
    }

    @Override // yp.k5
    public String getName() {
        return this.f55139d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f55139d.hashCode() * 31) + this.f55140e.hashCode()) * 31;
        Integer num = this.f55141i;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        String str = this.f55139d;
        List list = this.f55140e;
        Integer num = this.f55141i;
        return "FooterComponent(name=" + str + ", children=" + list + ", firstBelowTheFoldChildIndex=" + num + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f55139d);
        List<Parcelable> list = this.f55140e;
        dest.writeInt(list.size());
        for (Parcelable parcelable : list) {
            dest.writeParcelable(parcelable, i10);
        }
        Integer num = this.f55141i;
        if (num == null) {
            dest.writeInt(0);
            return;
        }
        dest.writeInt(1);
        dest.writeInt(num.intValue());
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public y(com.withpersona.sdk2.inquiry.network.dto.ui.components.Footer r5) {
        /*
            r4 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
            java.lang.String r0 = r5.getName()
            java.util.List r1 = r5.getChildren()
            if (r1 == 0) goto L30
            java.lang.Iterable r1 = (java.lang.Iterable) r1
            java.util.ArrayList r2 = new java.util.ArrayList
            r2.<init>()
            java.util.Iterator r1 = r1.iterator()
        L1a:
            boolean r3 = r1.hasNext()
            if (r3 == 0) goto L34
            java.lang.Object r3 = r1.next()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.UiComponentConfig r3 = (com.withpersona.sdk2.inquiry.network.dto.ui.components.UiComponentConfig) r3
            yp.k5 r3 = com.withpersona.sdk2.inquiry.steps.ui.components.f.l(r3)
            if (r3 == 0) goto L1a
            r2.add(r3)
            goto L1a
        L30:
            java.util.List r2 = kotlin.collections.CollectionsKt.l()
        L34:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.Footer$Attributes r5 = r5.getAttributes()
            if (r5 == 0) goto L3f
            java.lang.Integer r5 = r5.getFirstBelowTheFoldChildIndex()
            goto L40
        L3f:
            r5 = 0
        L40:
            r4.<init>(r0, r2, r5)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: yp.y.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.Footer):void");
    }
}
