package com.margelo.nitro.playagerangedeclaration;

import androidx.annotation.Keep;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Keep
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\u0015\n\u0002\u0010\b\n\u0002\b\u0003\b\u0087\b\u0018\u0000  2\u00020\u0001:\u0001 B7\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\b¢\u0006\u0004\b\n\u0010\u000bJ\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u0015\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000b\u0010\u0016\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u0010\u0010\u0017\u001a\u0004\u0018\u00010\bHÆ\u0003¢\u0006\u0002\u0010\u0011J\u0010\u0010\u0018\u001a\u0004\u0018\u00010\bHÆ\u0003¢\u0006\u0002\u0010\u0011JH\u0010\u0019\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\bHÆ\u0001¢\u0006\u0002\u0010\u001aJ\u0013\u0010\u001b\u001a\u00020\u00032\b\u0010\u001c\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001d\u001a\u00020\u001eHÖ\u0001J\t\u0010\u001f\u001a\u00020\u0005HÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u00038\u0006X\u0087\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0002\u0010\fR\u0018\u0010\u0004\u001a\u0004\u0018\u00010\u00058\u0006X\u0087\u0004¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0018\u0010\u0006\u001a\u0004\u0018\u00010\u00058\u0006X\u0087\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000eR\u001a\u0010\u0007\u001a\u0004\u0018\u00010\b8\u0006X\u0087\u0004¢\u0006\n\n\u0002\u0010\u0012\u001a\u0004\b\u0010\u0010\u0011R\u001a\u0010\t\u001a\u0004\u0018\u00010\b8\u0006X\u0087\u0004¢\u0006\n\n\u0002\u0010\u0012\u001a\u0004\b\u0013\u0010\u0011¨\u0006!"}, d2 = {"Lcom/margelo/nitro/playagerangedeclaration/DeclaredAgeRangeResult;", "", "isEligible", "", "status", "", "parentControls", "lowerBound", "", "upperBound", "<init>", "(ZLjava/lang/String;Ljava/lang/String;Ljava/lang/Double;Ljava/lang/Double;)V", "()Z", "getStatus", "()Ljava/lang/String;", "getParentControls", "getLowerBound", "()Ljava/lang/Double;", "Ljava/lang/Double;", "getUpperBound", "component1", "component2", "component3", "component4", "component5", "copy", "(ZLjava/lang/String;Ljava/lang/String;Ljava/lang/Double;Ljava/lang/Double;)Lcom/margelo/nitro/playagerangedeclaration/DeclaredAgeRangeResult;", "equals", "other", "hashCode", "", "toString", "Companion", "react-native-play-age-range-declaration_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class DeclaredAgeRangeResult {
    @NotNull
    private static final Companion Companion = new Companion(null);
    @Keep
    @fb.a
    private final boolean isEligible;
    @Keep
    @fb.a
    private final Double lowerBound;
    @Keep
    @fb.a
    private final String parentControls;
    @Keep
    @fb.a
    private final String status;
    @Keep
    @fb.a
    private final Double upperBound;

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\u0003\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J=\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\b\u0010\b\u001a\u0004\u0018\u00010\t2\b\u0010\n\u001a\u0004\u0018\u00010\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\f2\b\u0010\r\u001a\u0004\u0018\u00010\fH\u0003¢\u0006\u0002\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/margelo/nitro/playagerangedeclaration/DeclaredAgeRangeResult$Companion;", "", "<init>", "()V", "fromCpp", "Lcom/margelo/nitro/playagerangedeclaration/DeclaredAgeRangeResult;", "isEligible", "", "status", "", "parentControls", "lowerBound", "", "upperBound", "(ZLjava/lang/String;Ljava/lang/String;Ljava/lang/Double;Ljava/lang/Double;)Lcom/margelo/nitro/playagerangedeclaration/DeclaredAgeRangeResult;", "react-native-play-age-range-declaration_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        @Keep
        @fb.a
        public final DeclaredAgeRangeResult fromCpp(boolean z10, String str, String str2, Double d10, Double d11) {
            return new DeclaredAgeRangeResult(z10, str, str2, d10, d11);
        }

        private Companion() {
        }
    }

    public DeclaredAgeRangeResult(boolean z10, String str, String str2, Double d10, Double d11) {
        this.isEligible = z10;
        this.status = str;
        this.parentControls = str2;
        this.lowerBound = d10;
        this.upperBound = d11;
    }

    public static /* synthetic */ DeclaredAgeRangeResult copy$default(DeclaredAgeRangeResult declaredAgeRangeResult, boolean z10, String str, String str2, Double d10, Double d11, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = declaredAgeRangeResult.isEligible;
        }
        if ((i10 & 2) != 0) {
            str = declaredAgeRangeResult.status;
        }
        if ((i10 & 4) != 0) {
            str2 = declaredAgeRangeResult.parentControls;
        }
        if ((i10 & 8) != 0) {
            d10 = declaredAgeRangeResult.lowerBound;
        }
        if ((i10 & 16) != 0) {
            d11 = declaredAgeRangeResult.upperBound;
        }
        Double d12 = d11;
        String str3 = str2;
        return declaredAgeRangeResult.copy(z10, str, str3, d10, d12);
    }

    @Keep
    @fb.a
    private static final DeclaredAgeRangeResult fromCpp(boolean z10, String str, String str2, Double d10, Double d11) {
        return Companion.fromCpp(z10, str, str2, d10, d11);
    }

    public final boolean component1() {
        return this.isEligible;
    }

    public final String component2() {
        return this.status;
    }

    public final String component3() {
        return this.parentControls;
    }

    public final Double component4() {
        return this.lowerBound;
    }

    public final Double component5() {
        return this.upperBound;
    }

    @NotNull
    public final DeclaredAgeRangeResult copy(boolean z10, String str, String str2, Double d10, Double d11) {
        return new DeclaredAgeRangeResult(z10, str, str2, d10, d11);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof DeclaredAgeRangeResult) {
            DeclaredAgeRangeResult declaredAgeRangeResult = (DeclaredAgeRangeResult) obj;
            return this.isEligible == declaredAgeRangeResult.isEligible && Intrinsics.areEqual(this.status, declaredAgeRangeResult.status) && Intrinsics.areEqual(this.parentControls, declaredAgeRangeResult.parentControls) && Intrinsics.areEqual((Object) this.lowerBound, (Object) declaredAgeRangeResult.lowerBound) && Intrinsics.areEqual((Object) this.upperBound, (Object) declaredAgeRangeResult.upperBound);
        }
        return false;
    }

    public final Double getLowerBound() {
        return this.lowerBound;
    }

    public final String getParentControls() {
        return this.parentControls;
    }

    public final String getStatus() {
        return this.status;
    }

    public final Double getUpperBound() {
        return this.upperBound;
    }

    public int hashCode() {
        int hashCode = Boolean.hashCode(this.isEligible) * 31;
        String str = this.status;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.parentControls;
        int hashCode3 = (hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31;
        Double d10 = this.lowerBound;
        int hashCode4 = (hashCode3 + (d10 == null ? 0 : d10.hashCode())) * 31;
        Double d11 = this.upperBound;
        return hashCode4 + (d11 != null ? d11.hashCode() : 0);
    }

    public final boolean isEligible() {
        return this.isEligible;
    }

    @NotNull
    public String toString() {
        boolean z10 = this.isEligible;
        String str = this.status;
        String str2 = this.parentControls;
        Double d10 = this.lowerBound;
        Double d11 = this.upperBound;
        return "DeclaredAgeRangeResult(isEligible=" + z10 + ", status=" + str + ", parentControls=" + str2 + ", lowerBound=" + d10 + ", upperBound=" + d11 + ")";
    }
}
