package app.rive;

import android.content.res.Resources;
import java.util.Arrays;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\bv\u0018\u00002\u00020\u0001:\u0002\u0002\u0003\u0082\u0001\u0002\u0004\u0005¨\u0006\u0006"}, d2 = {"Lapp/rive/RiveFileSource;", "", "Bytes", "RawRes", "Lapp/rive/RiveFileSource$Bytes;", "Lapp/rive/RiveFileSource$RawRes;", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface RiveFileSource {

    @Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0012\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\b\u0087@\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u001a\u0010\b\u001a\u00020\t2\b\u0010\n\u001a\u0004\u0018\u00010\u000bHÖ\u0003¢\u0006\u0004\b\f\u0010\rJ\u0010\u0010\u000e\u001a\u00020\u000fHÖ\u0001¢\u0006\u0004\b\u0010\u0010\u0011J\u0010\u0010\u0012\u001a\u00020\u0013HÖ\u0001¢\u0006\u0004\b\u0014\u0010\u0015R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007\u0088\u0001\u0002¨\u0006\u0016"}, d2 = {"Lapp/rive/RiveFileSource$Bytes;", "Lapp/rive/RiveFileSource;", "data", "", "constructor-impl", "([B)[B", "getData", "()[B", "equals", "", "other", "", "equals-impl", "([BLjava/lang/Object;)Z", "hashCode", "", "hashCode-impl", "([B)I", "toString", "", "toString-impl", "([B)Ljava/lang/String;", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Bytes implements RiveFileSource {
        @NotNull
        private final byte[] data;

        private /* synthetic */ Bytes(byte[] bArr) {
            this.data = bArr;
        }

        /* renamed from: box-impl  reason: not valid java name */
        public static final /* synthetic */ Bytes m34boximpl(byte[] bArr) {
            return new Bytes(bArr);
        }

        @NotNull
        /* renamed from: constructor-impl  reason: not valid java name */
        public static byte[] m35constructorimpl(@NotNull byte[] data) {
            Intrinsics.checkNotNullParameter(data, "data");
            return data;
        }

        /* renamed from: equals-impl  reason: not valid java name */
        public static boolean m36equalsimpl(byte[] bArr, Object obj) {
            return (obj instanceof Bytes) && Intrinsics.areEqual(bArr, ((Bytes) obj).m40unboximpl());
        }

        /* renamed from: equals-impl0  reason: not valid java name */
        public static final boolean m37equalsimpl0(byte[] bArr, byte[] bArr2) {
            return Intrinsics.areEqual(bArr, bArr2);
        }

        /* renamed from: hashCode-impl  reason: not valid java name */
        public static int m38hashCodeimpl(byte[] bArr) {
            return Arrays.hashCode(bArr);
        }

        /* renamed from: toString-impl  reason: not valid java name */
        public static String m39toStringimpl(byte[] bArr) {
            String arrays = Arrays.toString(bArr);
            return "Bytes(data=" + arrays + ")";
        }

        public boolean equals(Object obj) {
            return m36equalsimpl(this.data, obj);
        }

        @NotNull
        public final byte[] getData() {
            return this.data;
        }

        public int hashCode() {
            return m38hashCodeimpl(this.data);
        }

        public String toString() {
            return m39toStringimpl(this.data);
        }

        /* renamed from: unbox-impl  reason: not valid java name */
        public final /* synthetic */ byte[] m40unboximpl() {
            return this.data;
        }
    }

    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0087\b\u0018\u00002\u00020\u0001B\u0017\u0012\b\b\u0001\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0002\u0010\u0006J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\t\u0010\f\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\r\u001a\u00020\u00002\b\b\u0003\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u000e\u001a\u00020\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0011HÖ\u0003J\t\u0010\u0012\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0013\u001a\u00020\u0014HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\n¨\u0006\u0015"}, d2 = {"Lapp/rive/RiveFileSource$RawRes;", "Lapp/rive/RiveFileSource;", "resId", "", "resources", "Landroid/content/res/Resources;", "(ILandroid/content/res/Resources;)V", "getResId", "()I", "getResources", "()Landroid/content/res/Resources;", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "toString", "", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class RawRes implements RiveFileSource {
        public static final int $stable = 8;
        private final int resId;
        @NotNull
        private final Resources resources;

        public RawRes(int i10, @NotNull Resources resources) {
            Intrinsics.checkNotNullParameter(resources, "resources");
            this.resId = i10;
            this.resources = resources;
        }

        public static /* synthetic */ RawRes copy$default(RawRes rawRes, int i10, Resources resources, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                i10 = rawRes.resId;
            }
            if ((i11 & 2) != 0) {
                resources = rawRes.resources;
            }
            return rawRes.copy(i10, resources);
        }

        public final int component1() {
            return this.resId;
        }

        @NotNull
        public final Resources component2() {
            return this.resources;
        }

        @NotNull
        public final RawRes copy(int i10, @NotNull Resources resources) {
            Intrinsics.checkNotNullParameter(resources, "resources");
            return new RawRes(i10, resources);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof RawRes) {
                RawRes rawRes = (RawRes) obj;
                return this.resId == rawRes.resId && Intrinsics.areEqual(this.resources, rawRes.resources);
            }
            return false;
        }

        public final int getResId() {
            return this.resId;
        }

        @NotNull
        public final Resources getResources() {
            return this.resources;
        }

        public int hashCode() {
            return (Integer.hashCode(this.resId) * 31) + this.resources.hashCode();
        }

        @NotNull
        public String toString() {
            int i10 = this.resId;
            Resources resources = this.resources;
            return "RawRes(resId=" + i10 + ", resources=" + resources + ")";
        }
    }
}
