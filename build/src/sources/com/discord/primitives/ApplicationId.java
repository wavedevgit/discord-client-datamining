package com.discord.primitives;

import android.os.Parcel;
import android.os.Parcelable;
import com.discord.snowflake.SnowflakePrimitive;
import ft.m;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u0000\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\b\u0087@\u0018\u0000 $2\u00020\u0001:\u0002#$B\u0013\u0012\n\u0010\u0002\u001a\u00060\u0003j\u0002`\u0004¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\t\u001a\u00020\nH\u0016¢\u0006\u0004\b\u000b\u0010\fJ\u000f\u0010\r\u001a\u00020\u000eH\u0016¢\u0006\u0004\b\u000f\u0010\u0010J\r\u0010\u0011\u001a\u00020\u0012¢\u0006\u0004\b\u0013\u0010\u0014J\u001a\u0010\u0015\u001a\u00020\u000e2\b\u0010\u0016\u001a\u0004\u0018\u00010\u0017HÖ\u0003¢\u0006\u0004\b\u0018\u0010\u0019J\u0010\u0010\u001a\u001a\u00020\u0012HÖ\u0001¢\u0006\u0004\b\u001b\u0010\u0014J\u001d\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u0012¢\u0006\u0004\b!\u0010\"R\u0018\u0010\u0002\u001a\u00060\u0003j\u0002`\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\b\u0088\u0001\u0002¨\u0006%"}, d2 = {"Lcom/discord/primitives/ApplicationId;", "Lcom/discord/snowflake/SnowflakePrimitive;", "snowflake", "", "Lcom/discord/snowflake/Snowflake;", "constructor-impl", "(J)J", "getSnowflake", "()J", "toString", "", "toString-impl", "(J)Ljava/lang/String;", "isValid", "", "isValid-impl", "(J)Z", "describeContents", "", "describeContents-impl", "(J)I", "equals", "other", "", "equals-impl", "(JLjava/lang/Object;)Z", "hashCode", "hashCode-impl", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "writeToParcel-impl", "(JLandroid/os/Parcel;I)V", "$serializer", "Companion", "primitives_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ApplicationId implements SnowflakePrimitive {
    private final long snowflake;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final Parcelable.Creator<ApplicationId> CREATOR = new Creator();

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/primitives/ApplicationId$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/primitives/ApplicationId;", "primitives_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ApplicationId$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Creator implements Parcelable.Creator<ApplicationId> {
        @Override // android.os.Parcelable.Creator
        public /* bridge */ /* synthetic */ ApplicationId createFromParcel(Parcel parcel) {
            return ApplicationId.m1044boximpl(m1056createFromParcelUV2lyTI(parcel));
        }

        /* renamed from: createFromParcel-UV2lyTI  reason: not valid java name */
        public final long m1056createFromParcelUV2lyTI(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return ApplicationId.m1045constructorimpl(parcel.readLong());
        }

        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final ApplicationId[] newArray(int i10) {
            return new ApplicationId[i10];
        }
    }

    private /* synthetic */ ApplicationId(long j10) {
        this.snowflake = j10;
    }

    /* renamed from: box-impl  reason: not valid java name */
    public static final /* synthetic */ ApplicationId m1044boximpl(long j10) {
        return new ApplicationId(j10);
    }

    /* renamed from: constructor-impl  reason: not valid java name */
    public static long m1045constructorimpl(long j10) {
        return j10;
    }

    /* renamed from: describeContents-impl  reason: not valid java name */
    public static final int m1046describeContentsimpl(long j10) {
        return 0;
    }

    /* renamed from: equals-impl  reason: not valid java name */
    public static boolean m1047equalsimpl(long j10, Object obj) {
        return (obj instanceof ApplicationId) && j10 == ((ApplicationId) obj).m1053unboximpl();
    }

    /* renamed from: equals-impl0  reason: not valid java name */
    public static final boolean m1048equalsimpl0(long j10, long j11) {
        return j10 == j11;
    }

    /* renamed from: hashCode-impl  reason: not valid java name */
    public static int m1049hashCodeimpl(long j10) {
        return Long.hashCode(j10);
    }

    /* renamed from: isValid-impl  reason: not valid java name */
    public static boolean m1050isValidimpl(long j10) {
        return j10 > 0;
    }

    @NotNull
    /* renamed from: toString-impl  reason: not valid java name */
    public static String m1051toStringimpl(long j10) {
        return String.valueOf(j10);
    }

    /* renamed from: writeToParcel-impl  reason: not valid java name */
    public static final void m1052writeToParcelimpl(long j10, @NotNull Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeLong(j10);
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return m1046describeContentsimpl(this.snowflake);
    }

    public boolean equals(Object obj) {
        return m1047equalsimpl(this.snowflake, obj);
    }

    @Override // com.discord.snowflake.SnowflakePrimitive
    public long getSnowflake() {
        return this.snowflake;
    }

    public int hashCode() {
        return m1049hashCodeimpl(this.snowflake);
    }

    @Override // com.discord.snowflake.SnowflakePrimitive
    public boolean isValid() {
        return m1050isValidimpl(this.snowflake);
    }

    @NotNull
    public String toString() {
        return m1051toStringimpl(this.snowflake);
    }

    /* renamed from: unbox-impl  reason: not valid java name */
    public final /* synthetic */ long m1053unboximpl() {
        return this.snowflake;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(@NotNull Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        m1052writeToParcelimpl(this.snowflake, dest, i10);
    }
}
