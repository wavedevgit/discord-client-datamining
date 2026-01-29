package com.withpersona.sdk2.inquiry.network.dto.government_id;

import android.os.Parcel;
import android.os.Parcelable;
import com.squareup.moshi.g;
import com.squareup.moshi.h;
import com.squareup.moshi.i;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.government_id.CapturePageConfig;
import com.withpersona.sdk2.inquiry.network.dto.government_id.Id;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import rm.a;
@i(generateAdapter = true)
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0007\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0087\b\u0018\u0000 '2\u00020\u0001:\u0003'()B7\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\u000e\u0010\b\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\u0005¢\u0006\u0004\b\n\u0010\u000bJ\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\u000f\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00030\u0005HÆ\u0003J\u000b\u0010\u0018\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\u0011\u0010\u0019\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\u0005HÆ\u0003JA\u0010\u001a\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\u000e\b\u0002\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0010\b\u0002\u0010\b\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\u0005HÆ\u0001J\u0006\u0010\u001b\u001a\u00020\u001cJ\u0013\u0010\u001d\u001a\u00020\u00142\b\u0010\u001e\u001a\u0004\u0018\u00010\u001fHÖ\u0003J\t\u0010 \u001a\u00020\u001cHÖ\u0001J\t\u0010!\u001a\u00020\u0003HÖ\u0001J\u0016\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020\u001cR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0017\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0019\u0010\b\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u000fR\u0011\u0010\u0013\u001a\u00020\u00148F¢\u0006\u0006\u001a\u0004\b\u0013\u0010\u0015¨\u0006*"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id;", "Landroid/os/Parcelable;", "class", "", "requiresSides", "", "icon", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id$IdIcon;", "capturePageConfigs", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/CapturePageConfig;", "<init>", "(Ljava/lang/String;Ljava/util/List;Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id$IdIcon;Ljava/util/List;)V", "getClass", "()Ljava/lang/String;", "getRequiresSides", "()Ljava/util/List;", "getIcon", "()Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id$IdIcon;", "getCapturePageConfigs", "isDynamicGovId", "", "()Z", "component1", "component2", "component3", "component4", "copy", "describeContents", "", "equals", "other", "", "hashCode", "toString", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "Companion", "IdIcon", "IdLocalIcon", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Id implements Parcelable {
    private final List<CapturePageConfig> capturePageConfigs;
    @NotNull

    /* renamed from: class  reason: not valid java name */
    private final String f2class;
    private final IdIcon icon;
    @NotNull
    private final List<String> requiresSides;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final Parcelable.Creator<Id> CREATOR = new Creator();

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\r\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006¨\u0006\u0007"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id$Companion;", "", "<init>", "()V", "Lcom/squareup/moshi/h$e;", "createAdapter", "()Lcom/squareup/moshi/h$e;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final h createAdapter$lambda$0(Type type, Set set, w wVar) {
            if (Intrinsics.areEqual(type, CapturePageConfig.RuleType.class)) {
                return a.a(CapturePageConfig.RuleType.class).d(null);
            }
            if (Intrinsics.areEqual(type, CapturePageConfig.OverlayLocalIcon.class)) {
                return a.a(CapturePageConfig.OverlayLocalIcon.class).d(null);
            }
            if (!Intrinsics.areEqual(type, IdLocalIcon.class)) {
                return null;
            }
            return a.a(IdLocalIcon.class).d(null);
        }

        @NotNull
        public final h.e createAdapter() {
            return new h.e() { // from class: xo.a
                @Override // com.squareup.moshi.h.e
                public final h create(Type type, Set set, w wVar) {
                    h createAdapter$lambda$0;
                    createAdapter$lambda$0 = Id.Companion.createAdapter$lambda$0(type, set, wVar);
                    return createAdapter$lambda$0;
                }
            };
        }

        private Companion() {
        }
    }

    @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Creator implements Parcelable.Creator<Id> {
        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final Id createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            ArrayList<String> createStringArrayList = parcel.createStringArrayList();
            ArrayList arrayList = null;
            IdIcon createFromParcel = parcel.readInt() == 0 ? null : IdIcon.CREATOR.createFromParcel(parcel);
            if (parcel.readInt() != 0) {
                int readInt = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList2.add(CapturePageConfig.CREATOR.createFromParcel(parcel));
                }
                arrayList = arrayList2;
            }
            return new Id(readString, createStringArrayList, createFromParcel, arrayList);
        }

        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final Id[] newArray(int i10) {
            return new Id[i10];
        }
    }

    @i(generateAdapter = true)
    @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B\u0011\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u000b\u0010\b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0015\u0010\t\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0006\u0010\n\u001a\u00020\u000bJ\u0013\u0010\f\u001a\u00020\r2\b\u0010\u000e\u001a\u0004\u0018\u00010\u000fHÖ\u0003J\t\u0010\u0010\u001a\u00020\u000bHÖ\u0001J\t\u0010\u0011\u001a\u00020\u0012HÖ\u0001J\u0016\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u000bR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0018"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id$IdIcon;", "Landroid/os/Parcelable;", "iconFallback", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id$IdLocalIcon;", "<init>", "(Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id$IdLocalIcon;)V", "getIconFallback", "()Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id$IdLocalIcon;", "component1", "copy", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class IdIcon implements Parcelable {
        @NotNull
        public static final Parcelable.Creator<IdIcon> CREATOR = new Creator();
        private final IdLocalIcon iconFallback;

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class Creator implements Parcelable.Creator<IdIcon> {
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final IdIcon createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                return new IdIcon(parcel.readInt() == 0 ? null : IdLocalIcon.valueOf(parcel.readString()));
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // android.os.Parcelable.Creator
            public final IdIcon[] newArray(int i10) {
                return new IdIcon[i10];
            }
        }

        public IdIcon(IdLocalIcon idLocalIcon) {
            this.iconFallback = idLocalIcon;
        }

        public static /* synthetic */ IdIcon copy$default(IdIcon idIcon, IdLocalIcon idLocalIcon, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                idLocalIcon = idIcon.iconFallback;
            }
            return idIcon.copy(idLocalIcon);
        }

        public final IdLocalIcon component1() {
            return this.iconFallback;
        }

        @NotNull
        public final IdIcon copy(IdLocalIcon idLocalIcon) {
            return new IdIcon(idLocalIcon);
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof IdIcon) && this.iconFallback == ((IdIcon) obj).iconFallback;
        }

        public final IdLocalIcon getIconFallback() {
            return this.iconFallback;
        }

        public int hashCode() {
            IdLocalIcon idLocalIcon = this.iconFallback;
            if (idLocalIcon == null) {
                return 0;
            }
            return idLocalIcon.hashCode();
        }

        @NotNull
        public String toString() {
            IdLocalIcon idLocalIcon = this.iconFallback;
            return "IdIcon(iconFallback=" + idLocalIcon + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(@NotNull Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            IdLocalIcon idLocalIcon = this.iconFallback;
            if (idLocalIcon == null) {
                dest.writeInt(0);
                return;
            }
            dest.writeInt(1);
            dest.writeString(idLocalIcon.name());
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @i(generateAdapter = false)
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0087\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007¨\u0006\b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id$IdLocalIcon;", "", "<init>", "(Ljava/lang/String;I)V", "WORLD", "CARD", "FLAG", "HOUSE", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class IdLocalIcon {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ IdLocalIcon[] $VALUES;
        @g(name = "world")
        public static final IdLocalIcon WORLD = new IdLocalIcon("WORLD", 0);
        @g(name = "card")
        public static final IdLocalIcon CARD = new IdLocalIcon("CARD", 1);
        @g(name = "flag")
        public static final IdLocalIcon FLAG = new IdLocalIcon("FLAG", 2);
        @g(name = "house")
        public static final IdLocalIcon HOUSE = new IdLocalIcon("HOUSE", 3);

        private static final /* synthetic */ IdLocalIcon[] $values() {
            return new IdLocalIcon[]{WORLD, CARD, FLAG, HOUSE};
        }

        static {
            IdLocalIcon[] $values = $values();
            $VALUES = $values;
            $ENTRIES = pr.a.a($values);
        }

        private IdLocalIcon(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static IdLocalIcon valueOf(String str) {
            return (IdLocalIcon) Enum.valueOf(IdLocalIcon.class, str);
        }

        public static IdLocalIcon[] values() {
            return (IdLocalIcon[]) $VALUES.clone();
        }
    }

    public Id(@NotNull String str, @NotNull List<String> requiresSides, IdIcon idIcon, List<CapturePageConfig> list) {
        Intrinsics.checkNotNullParameter(str, "class");
        Intrinsics.checkNotNullParameter(requiresSides, "requiresSides");
        this.f2class = str;
        this.requiresSides = requiresSides;
        this.icon = idIcon;
        this.capturePageConfigs = list;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ Id copy$default(Id id2, String str, List list, IdIcon idIcon, List list2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = id2.f2class;
        }
        if ((i10 & 2) != 0) {
            list = id2.requiresSides;
        }
        if ((i10 & 4) != 0) {
            idIcon = id2.icon;
        }
        if ((i10 & 8) != 0) {
            list2 = id2.capturePageConfigs;
        }
        return id2.copy(str, list, idIcon, list2);
    }

    @NotNull
    public final String component1() {
        return this.f2class;
    }

    @NotNull
    public final List<String> component2() {
        return this.requiresSides;
    }

    public final IdIcon component3() {
        return this.icon;
    }

    public final List<CapturePageConfig> component4() {
        return this.capturePageConfigs;
    }

    @NotNull
    public final Id copy(@NotNull String str, @NotNull List<String> requiresSides, IdIcon idIcon, List<CapturePageConfig> list) {
        Intrinsics.checkNotNullParameter(str, "class");
        Intrinsics.checkNotNullParameter(requiresSides, "requiresSides");
        return new Id(str, requiresSides, idIcon, list);
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Id) {
            Id id2 = (Id) obj;
            return Intrinsics.areEqual(this.f2class, id2.f2class) && Intrinsics.areEqual(this.requiresSides, id2.requiresSides) && Intrinsics.areEqual(this.icon, id2.icon) && Intrinsics.areEqual(this.capturePageConfigs, id2.capturePageConfigs);
        }
        return false;
    }

    public final List<CapturePageConfig> getCapturePageConfigs() {
        return this.capturePageConfigs;
    }

    @NotNull
    public final String getClass() {
        return this.f2class;
    }

    public final IdIcon getIcon() {
        return this.icon;
    }

    @NotNull
    public final List<String> getRequiresSides() {
        return this.requiresSides;
    }

    public int hashCode() {
        int hashCode = ((this.f2class.hashCode() * 31) + this.requiresSides.hashCode()) * 31;
        IdIcon idIcon = this.icon;
        int hashCode2 = (hashCode + (idIcon == null ? 0 : idIcon.hashCode())) * 31;
        List<CapturePageConfig> list = this.capturePageConfigs;
        return hashCode2 + (list != null ? list.hashCode() : 0);
    }

    public final boolean isDynamicGovId() {
        if (this.capturePageConfigs != null) {
            return true;
        }
        return false;
    }

    @NotNull
    public String toString() {
        String str = this.f2class;
        List<String> list = this.requiresSides;
        IdIcon idIcon = this.icon;
        List<CapturePageConfig> list2 = this.capturePageConfigs;
        return "Id(class=" + str + ", requiresSides=" + list + ", icon=" + idIcon + ", capturePageConfigs=" + list2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(@NotNull Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f2class);
        dest.writeStringList(this.requiresSides);
        IdIcon idIcon = this.icon;
        if (idIcon == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            idIcon.writeToParcel(dest, i10);
        }
        List<CapturePageConfig> list = this.capturePageConfigs;
        if (list == null) {
            dest.writeInt(0);
            return;
        }
        dest.writeInt(1);
        dest.writeInt(list.size());
        for (CapturePageConfig capturePageConfig : list) {
            capturePageConfig.writeToParcel(dest, i10);
        }
    }
}
