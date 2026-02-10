package qq;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.steps.ui.components.GovernmentIdNfcScanComponent;
import gq.k5;
import gq.q5;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g3 implements Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b extends Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements b {
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0635a();

            /* renamed from: d  reason: collision with root package name */
            private final com.withpersona.sdk2.inquiry.steps.ui.components.a f46820d;

            /* renamed from: qq.g3$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0635a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new a((com.withpersona.sdk2.inquiry.steps.ui.components.a) parcel.readParcelable(a.class.getClassLoader()));
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final a[] newArray(int i10) {
                    return new a[i10];
                }
            }

            public a(com.withpersona.sdk2.inquiry.steps.ui.components.a createPersonaSheetComponent) {
                Intrinsics.checkNotNullParameter(createPersonaSheetComponent, "createPersonaSheetComponent");
                this.f46820d = createPersonaSheetComponent;
            }

            public final com.withpersona.sdk2.inquiry.steps.ui.components.a a() {
                return this.f46820d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof a) && Intrinsics.areEqual(this.f46820d, ((a) obj).f46820d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f46820d.hashCode();
            }

            public String toString() {
                com.withpersona.sdk2.inquiry.steps.ui.components.a aVar = this.f46820d;
                return "CreateReusablePersona(createPersonaSheetComponent=" + aVar + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f46820d, i10);
            }
        }

        /* renamed from: qq.g3$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0636b implements b {
            @NotNull
            public static final Parcelable.Creator<C0636b> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final q5 f46821d;

            /* renamed from: e  reason: collision with root package name */
            private final Map f46822e;

            /* renamed from: qq.g3$b$b$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0636b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    q5 q5Var = (q5) parcel.readParcelable(C0636b.class.getClassLoader());
                    int readInt = parcel.readInt();
                    LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        linkedHashMap.put(parcel.readString(), parcel.readParcelable(C0636b.class.getClassLoader()));
                    }
                    return new C0636b(q5Var, linkedHashMap);
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0636b[] newArray(int i10) {
                    return new C0636b[i10];
                }
            }

            public C0636b(q5 verifyPersonaButtonComponent, Map componentParams) {
                Intrinsics.checkNotNullParameter(verifyPersonaButtonComponent, "verifyPersonaButtonComponent");
                Intrinsics.checkNotNullParameter(componentParams, "componentParams");
                this.f46821d = verifyPersonaButtonComponent;
                this.f46822e = componentParams;
            }

            public final Map a() {
                return this.f46822e;
            }

            public final q5 b() {
                return this.f46821d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof C0636b)) {
                    return false;
                }
                C0636b c0636b = (C0636b) obj;
                if (Intrinsics.areEqual(this.f46821d, c0636b.f46821d) && Intrinsics.areEqual(this.f46822e, c0636b.f46822e)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (this.f46821d.hashCode() * 31) + this.f46822e.hashCode();
            }

            public String toString() {
                q5 q5Var = this.f46821d;
                Map map = this.f46822e;
                return "VerifyReusablePersona(verifyPersonaButtonComponent=" + q5Var + ", componentParams=" + map + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f46821d, i10);
                Map map = this.f46822e;
                dest.writeInt(map.size());
                for (Map.Entry entry : map.entrySet()) {
                    dest.writeString((String) entry.getKey());
                    dest.writeParcelable((Parcelable) entry.getValue(), i10);
                }
            }
        }
    }

    public /* synthetic */ g3(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private g3() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends g3 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new b();

        /* renamed from: d  reason: collision with root package name */
        private final List f46803d;

        /* renamed from: e  reason: collision with root package name */
        private final String f46804e;

        /* renamed from: i  reason: collision with root package name */
        private final List f46805i;

        /* renamed from: o  reason: collision with root package name */
        private final StepStyles.UiStepStyle f46806o;

        /* renamed from: p  reason: collision with root package name */
        private final String f46807p;

        /* renamed from: q  reason: collision with root package name */
        private final c f46808q;

        /* renamed from: r  reason: collision with root package name */
        private final C0632a f46809r;

        /* renamed from: s  reason: collision with root package name */
        private final b f46810s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f46811t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f46812u;

        /* renamed from: v  reason: collision with root package name */
        private final Map f46813v;

        /* renamed from: w  reason: collision with root package name */
        private final k5 f46814w;

        /* renamed from: x  reason: collision with root package name */
        private final String f46815x;

        /* renamed from: qq.g3$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0632a implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<C0632a> CREATOR = new C0633a();

            /* renamed from: d  reason: collision with root package name */
            private final gq.h f46816d;

            /* renamed from: e  reason: collision with root package name */
            private final int f46817e;

            /* renamed from: i  reason: collision with root package name */
            private final String f46818i;

            /* renamed from: qq.g3$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0633a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0632a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new C0632a((gq.h) parcel.readParcelable(C0632a.class.getClassLoader()), parcel.readInt(), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0632a[] newArray(int i10) {
                    return new C0632a[i10];
                }
            }

            public C0632a(gq.h component, int i10, String str) {
                Intrinsics.checkNotNullParameter(component, "component");
                this.f46816d = component;
                this.f46817e = i10;
                this.f46818i = str;
            }

            public final gq.h a() {
                return this.f46816d;
            }

            public final int b() {
                return this.f46817e;
            }

            public final String c() {
                return this.f46818i;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof C0632a)) {
                    return false;
                }
                C0632a c0632a = (C0632a) obj;
                if (Intrinsics.areEqual(this.f46816d, c0632a.f46816d) && this.f46817e == c0632a.f46817e && Intrinsics.areEqual(this.f46818i, c0632a.f46818i)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((this.f46816d.hashCode() * 31) + Integer.hashCode(this.f46817e)) * 31;
                String str = this.f46818i;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return hashCode2 + hashCode;
            }

            public String toString() {
                gq.h hVar = this.f46816d;
                int i10 = this.f46817e;
                String str = this.f46818i;
                return "AutoSubmit(component=" + hVar + ", countdown=" + i10 + ", countdownText=" + str + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f46816d, i10);
                dest.writeInt(this.f46817e);
                dest.writeString(this.f46818i);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                c createFromParcel;
                C0632a createFromParcel2;
                LinkedHashMap linkedHashMap;
                C0632a c0632a;
                b bVar;
                boolean z10;
                LinkedHashMap linkedHashMap2;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                int i10 = 0;
                for (int i11 = 0; i11 != readInt; i11++) {
                    arrayList.add(parcel.readParcelable(a.class.getClassLoader()));
                }
                String readString = parcel.readString();
                int readInt2 = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt2);
                for (int i12 = 0; i12 != readInt2; i12++) {
                    arrayList2.add(parcel.readParcelable(a.class.getClassLoader()));
                }
                StepStyles.UiStepStyle uiStepStyle = (StepStyles.UiStepStyle) parcel.readParcelable(a.class.getClassLoader());
                String readString2 = parcel.readString();
                if (parcel.readInt() == 0) {
                    createFromParcel = null;
                } else {
                    createFromParcel = c.CREATOR.createFromParcel(parcel);
                }
                c cVar = createFromParcel;
                if (parcel.readInt() == 0) {
                    createFromParcel2 = null;
                } else {
                    createFromParcel2 = C0632a.CREATOR.createFromParcel(parcel);
                }
                C0632a c0632a2 = createFromParcel2;
                b bVar2 = (b) parcel.readParcelable(a.class.getClassLoader());
                boolean z11 = true;
                if (parcel.readInt() != 0) {
                    linkedHashMap = null;
                    c0632a = c0632a2;
                    bVar = bVar2;
                    z10 = true;
                } else {
                    linkedHashMap = null;
                    c0632a = c0632a2;
                    bVar = bVar2;
                    z10 = false;
                }
                if (parcel.readInt() == 0) {
                    z11 = false;
                }
                if (parcel.readInt() == 0) {
                    linkedHashMap2 = linkedHashMap;
                } else {
                    int readInt3 = parcel.readInt();
                    linkedHashMap2 = new LinkedHashMap(readInt3);
                    while (i10 != readInt3) {
                        linkedHashMap2.put(parcel.readString(), parcel.readParcelable(a.class.getClassLoader()));
                        i10++;
                        uiStepStyle = uiStepStyle;
                    }
                }
                return new a(arrayList, readString, arrayList2, uiStepStyle, readString2, cVar, c0632a, bVar, z10, z11, linkedHashMap2, (k5) parcel.readParcelable(a.class.getClassLoader()), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new C0634a();

            /* renamed from: d  reason: collision with root package name */
            private final GovernmentIdNfcScanComponent f46819d;

            /* renamed from: qq.g3$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0634a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new c((GovernmentIdNfcScanComponent) parcel.readParcelable(c.class.getClassLoader()));
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            public c(GovernmentIdNfcScanComponent component) {
                Intrinsics.checkNotNullParameter(component, "component");
                this.f46819d = component;
            }

            public final GovernmentIdNfcScanComponent a() {
                return this.f46819d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof c) && Intrinsics.areEqual(this.f46819d, ((c) obj).f46819d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f46819d.hashCode();
            }

            public String toString() {
                GovernmentIdNfcScanComponent governmentIdNfcScanComponent = this.f46819d;
                return "NfcScan(component=" + governmentIdNfcScanComponent + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f46819d, i10);
            }
        }

        public /* synthetic */ a(List list, String str, List list2, StepStyles.UiStepStyle uiStepStyle, String str2, c cVar, C0632a c0632a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String str3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(list, str, (i10 & 4) != 0 ? CollectionsKt.l() : list2, uiStepStyle, (i10 & 16) != 0 ? null : str2, (i10 & 32) != 0 ? null : cVar, (i10 & 64) != 0 ? null : c0632a, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : bVar, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : map, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : k5Var, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? "0" : str3);
        }

        public static /* synthetic */ a b(a aVar, List list, String str, List list2, StepStyles.UiStepStyle uiStepStyle, String str2, c cVar, C0632a c0632a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String str3, int i10, Object obj) {
            String str4;
            List list3;
            StepStyles.UiStepStyle uiStepStyle2;
            String str5;
            c cVar2;
            C0632a c0632a2;
            b bVar2;
            boolean z12;
            boolean z13;
            Map map2;
            k5 k5Var2;
            String str6;
            if ((i10 & 1) != 0) {
                list = aVar.f46803d;
            }
            if ((i10 & 2) != 0) {
                str4 = aVar.f46804e;
            } else {
                str4 = str;
            }
            if ((i10 & 4) != 0) {
                list3 = aVar.f46805i;
            } else {
                list3 = list2;
            }
            if ((i10 & 8) != 0) {
                uiStepStyle2 = aVar.f46806o;
            } else {
                uiStepStyle2 = uiStepStyle;
            }
            if ((i10 & 16) != 0) {
                str5 = aVar.f46807p;
            } else {
                str5 = str2;
            }
            if ((i10 & 32) != 0) {
                cVar2 = aVar.f46808q;
            } else {
                cVar2 = cVar;
            }
            if ((i10 & 64) != 0) {
                c0632a2 = aVar.f46809r;
            } else {
                c0632a2 = c0632a;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar2 = aVar.f46810s;
            } else {
                bVar2 = bVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z12 = aVar.f46811t;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z13 = aVar.f46812u;
            } else {
                z13 = z11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                map2 = aVar.f46813v;
            } else {
                map2 = map;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                k5Var2 = aVar.f46814w;
            } else {
                k5Var2 = k5Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                str6 = aVar.f46815x;
            } else {
                str6 = str3;
            }
            return aVar.a(list, str4, list3, uiStepStyle2, str5, cVar2, c0632a2, bVar2, z12, z13, map2, k5Var2, str6);
        }

        public final a a(List components, String stepName, List componentErrors, StepStyles.UiStepStyle uiStepStyle, String str, c cVar, C0632a c0632a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String requestPermissionKey) {
            Intrinsics.checkNotNullParameter(components, "components");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(componentErrors, "componentErrors");
            Intrinsics.checkNotNullParameter(requestPermissionKey, "requestPermissionKey");
            return new a(components, stepName, componentErrors, uiStepStyle, str, cVar, c0632a, bVar, z10, z11, map, k5Var, requestPermissionKey);
        }

        public final C0632a c() {
            return this.f46809r;
        }

        public final List d() {
            return this.f46805i;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final Map e() {
            return this.f46813v;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f46803d, aVar.f46803d) && Intrinsics.areEqual(this.f46804e, aVar.f46804e) && Intrinsics.areEqual(this.f46805i, aVar.f46805i) && Intrinsics.areEqual(this.f46806o, aVar.f46806o) && Intrinsics.areEqual(this.f46807p, aVar.f46807p) && Intrinsics.areEqual(this.f46808q, aVar.f46808q) && Intrinsics.areEqual(this.f46809r, aVar.f46809r) && Intrinsics.areEqual(this.f46810s, aVar.f46810s) && this.f46811t == aVar.f46811t && this.f46812u == aVar.f46812u && Intrinsics.areEqual(this.f46813v, aVar.f46813v) && Intrinsics.areEqual(this.f46814w, aVar.f46814w) && Intrinsics.areEqual(this.f46815x, aVar.f46815x)) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f46807p;
        }

        public final List getComponents() {
            return this.f46803d;
        }

        public final StepStyles.UiStepStyle getStyles() {
            return this.f46806o;
        }

        public final boolean h() {
            return this.f46811t;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6;
            int hashCode7 = ((((this.f46803d.hashCode() * 31) + this.f46804e.hashCode()) * 31) + this.f46805i.hashCode()) * 31;
            StepStyles.UiStepStyle uiStepStyle = this.f46806o;
            int i10 = 0;
            if (uiStepStyle == null) {
                hashCode = 0;
            } else {
                hashCode = uiStepStyle.hashCode();
            }
            int i11 = (hashCode7 + hashCode) * 31;
            String str = this.f46807p;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            c cVar = this.f46808q;
            if (cVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = cVar.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            C0632a c0632a = this.f46809r;
            if (c0632a == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = c0632a.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            b bVar = this.f46810s;
            if (bVar == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = bVar.hashCode();
            }
            int hashCode8 = (((((i14 + hashCode5) * 31) + Boolean.hashCode(this.f46811t)) * 31) + Boolean.hashCode(this.f46812u)) * 31;
            Map map = this.f46813v;
            if (map == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = map.hashCode();
            }
            int i15 = (hashCode8 + hashCode6) * 31;
            k5 k5Var = this.f46814w;
            if (k5Var != null) {
                i10 = k5Var.hashCode();
            }
            return ((i15 + i10) * 31) + this.f46815x.hashCode();
        }

        public final c i() {
            return this.f46808q;
        }

        public final b j() {
            return this.f46810s;
        }

        public final String l() {
            return this.f46815x;
        }

        public final String o() {
            return this.f46804e;
        }

        public final k5 p() {
            return this.f46814w;
        }

        public final boolean q() {
            return this.f46812u;
        }

        public String toString() {
            List list = this.f46803d;
            String str = this.f46804e;
            List list2 = this.f46805i;
            StepStyles.UiStepStyle uiStepStyle = this.f46806o;
            String str2 = this.f46807p;
            c cVar = this.f46808q;
            C0632a c0632a = this.f46809r;
            b bVar = this.f46810s;
            boolean z10 = this.f46811t;
            boolean z11 = this.f46812u;
            Map map = this.f46813v;
            k5 k5Var = this.f46814w;
            String str3 = this.f46815x;
            return "Displaying(components=" + list + ", stepName=" + str + ", componentErrors=" + list2 + ", styles=" + uiStepStyle + ", error=" + str2 + ", nfcScan=" + cVar + ", autoSubmit=" + c0632a + ", pendingAction=" + bVar + ", hasRequestedGpsPermissions=" + z10 + ", isRequestingGpsPermissions=" + z11 + ", componentParams=" + map + ", triggeringComponent=" + k5Var + ", requestPermissionKey=" + str3 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f46803d;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f46804e);
            List<Parcelable> list2 = this.f46805i;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeParcelable(this.f46806o, i10);
            dest.writeString(this.f46807p);
            c cVar = this.f46808q;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            C0632a c0632a = this.f46809r;
            if (c0632a == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                c0632a.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f46810s, i10);
            dest.writeInt(this.f46811t ? 1 : 0);
            dest.writeInt(this.f46812u ? 1 : 0);
            Map map = this.f46813v;
            if (map == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeInt(map.size());
                for (Map.Entry entry : map.entrySet()) {
                    dest.writeString((String) entry.getKey());
                    dest.writeParcelable((Parcelable) entry.getValue(), i10);
                }
            }
            dest.writeParcelable(this.f46814w, i10);
            dest.writeString(this.f46815x);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(List components, String stepName, List componentErrors, StepStyles.UiStepStyle uiStepStyle, String str, c cVar, C0632a c0632a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String requestPermissionKey) {
            super(null);
            Intrinsics.checkNotNullParameter(components, "components");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(componentErrors, "componentErrors");
            Intrinsics.checkNotNullParameter(requestPermissionKey, "requestPermissionKey");
            this.f46803d = components;
            this.f46804e = stepName;
            this.f46805i = componentErrors;
            this.f46806o = uiStepStyle;
            this.f46807p = str;
            this.f46808q = cVar;
            this.f46809r = c0632a;
            this.f46810s = bVar;
            this.f46811t = z10;
            this.f46812u = z11;
            this.f46813v = map;
            this.f46814w = k5Var;
            this.f46815x = requestPermissionKey;
        }
    }
}
