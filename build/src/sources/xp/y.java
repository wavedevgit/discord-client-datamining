package xp;

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
    private final String f53769d;

    /* renamed from: e  reason: collision with root package name */
    private final List f53770e;

    /* renamed from: i  reason: collision with root package name */
    private final Integer f53771i;

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
        this.f53769d = name;
        this.f53770e = children;
        this.f53771i = num;
    }

    public static /* synthetic */ y b(y yVar, String str, List list, Integer num, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = yVar.f53769d;
        }
        if ((i10 & 2) != 0) {
            list = yVar.f53770e;
        }
        if ((i10 & 4) != 0) {
            num = yVar.f53771i;
        }
        return yVar.a(str, list, num);
    }

    @Override // xp.l5
    public l5 R0(List newChildren) {
        Intrinsics.checkNotNullParameter(newChildren, "newChildren");
        return b(this, null, newChildren, null, 5, null);
    }

    public final y a(String name, List children, Integer num) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(children, "children");
        return new y(name, children, num);
    }

    public final Integer c() {
        return this.f53771i;
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
        if (Intrinsics.areEqual(this.f53769d, yVar.f53769d) && Intrinsics.areEqual(this.f53770e, yVar.f53770e) && Intrinsics.areEqual(this.f53771i, yVar.f53771i)) {
            return true;
        }
        return false;
    }

    @Override // xp.l5
    public List getChildren() {
        return this.f53770e;
    }

    @Override // xp.k5
    public String getName() {
        return this.f53769d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f53769d.hashCode() * 31) + this.f53770e.hashCode()) * 31;
        Integer num = this.f53771i;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        String str = this.f53769d;
        List list = this.f53770e;
        Integer num = this.f53771i;
        return "FooterComponent(name=" + str + ", children=" + list + ", firstBelowTheFoldChildIndex=" + num + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f53769d);
        List<Parcelable> list = this.f53770e;
        dest.writeInt(list.size());
        for (Parcelable parcelable : list) {
            dest.writeParcelable(parcelable, i10);
        }
        Integer num = this.f53771i;
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
            xp.k5 r3 = com.withpersona.sdk2.inquiry.steps.ui.components.f.l(r3)
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
        throw new UnsupportedOperationException("Method not decompiled: xp.y.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.Footer):void");
    }
}
