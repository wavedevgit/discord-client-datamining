package com.discord.user_search_worker;

import at.n2;
import at.u0;
import at.v1;
import at.x;
import ir.l;
import ir.o;
import java.util.List;
import java.util.Map;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.m;
@Metadata(d1 = {"\u0000X\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\b\u0002\n\u0002\u0010$\n\u0002\u0010\u0006\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0017\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 82\u00020\u0001:\u000278Bc\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u0010\b\u0002\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u0007\u0012\u0010\b\u0002\u0010\b\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u0007\u0012\u0012\u0010\t\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u000b0\n\u0012\u0006\u0010\f\u001a\u00020\u000b\u0012\u0006\u0010\r\u001a\u00020\u000e¢\u0006\u0004\b\u000f\u0010\u0010Bu\b\u0010\u0012\u0006\u0010\u0011\u001a\u00020\u000e\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u000e\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u0007\u0012\u000e\u0010\b\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u0007\u0012\u0014\u0010\t\u001a\u0010\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u000b\u0018\u00010\n\u0012\u0006\u0010\f\u001a\u00020\u000b\u0012\u0006\u0010\r\u001a\u00020\u000e\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013¢\u0006\u0004\b\u000f\u0010\u0014J\t\u0010\"\u001a\u00020\u0003HÆ\u0003J\u000b\u0010#\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u0011\u0010$\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u0007HÆ\u0003J\u0011\u0010%\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u0007HÆ\u0003J\u0015\u0010&\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u000b0\nHÆ\u0003J\t\u0010'\u001a\u00020\u000bHÆ\u0003J\t\u0010(\u001a\u00020\u000eHÆ\u0003Jm\u0010)\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0010\b\u0002\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u00072\u0010\b\u0002\u0010\b\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u00072\u0014\b\u0002\u0010\t\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u000b0\n2\b\b\u0002\u0010\f\u001a\u00020\u000b2\b\b\u0002\u0010\r\u001a\u00020\u000eHÆ\u0001J\u0013\u0010*\u001a\u00020+2\b\u0010,\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010-\u001a\u00020\u000eHÖ\u0001J\t\u0010.\u001a\u00020\u0003HÖ\u0001J%\u0010/\u001a\u0002002\u0006\u00101\u001a\u00020\u00002\u0006\u00102\u001a\u0002032\u0006\u00104\u001a\u000205H\u0001¢\u0006\u0002\b6R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u0019\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u001aR\u0019\u0010\b\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001aR\u001d\u0010\t\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u000b0\n¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u001dR\u0011\u0010\f\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001fR\u0011\u0010\r\u001a\u00020\u000e¢\u0006\b\n\u0000\u001a\u0004\b \u0010!¨\u00069"}, d2 = {"Lcom/discord/user_search_worker/UserSearchQuerySetPayload;", "", "query", "", "filters", "Lcom/discord/user_search_worker/UserSearchQuerySetFilters;", "blacklist", "", "whitelist", "boosters", "", "", "boosterFallback", "limit", "", "<init>", "(Ljava/lang/String;Lcom/discord/user_search_worker/UserSearchQuerySetFilters;Ljava/util/List;Ljava/util/List;Ljava/util/Map;DI)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Lcom/discord/user_search_worker/UserSearchQuerySetFilters;Ljava/util/List;Ljava/util/List;Ljava/util/Map;DILkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getQuery", "()Ljava/lang/String;", "getFilters", "()Lcom/discord/user_search_worker/UserSearchQuerySetFilters;", "getBlacklist", "()Ljava/util/List;", "getWhitelist", "getBoosters", "()Ljava/util/Map;", "getBoosterFallback", "()D", "getLimit", "()I", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$user_search_worker_release", "$serializer", "Companion", "user_search_worker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class UserSearchQuerySetPayload {
    @NotNull
    private static final Lazy[] $childSerializers;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final List<String> blacklist;
    private final double boosterFallback;
    @NotNull
    private final Map<String, Double> boosters;
    private final UserSearchQuerySetFilters filters;
    private final int limit;
    @NotNull
    private final String query;
    private final List<String> whitelist;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/user_search_worker/UserSearchQuerySetPayload$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/user_search_worker/UserSearchQuerySetPayload;", "user_search_worker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return UserSearchQuerySetPayload$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    static {
        o oVar = o.f31103e;
        $childSerializers = new Lazy[]{null, null, l.a(oVar, new Function0() { // from class: com.discord.user_search_worker.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_;
                _childSerializers$_anonymous_ = UserSearchQuerySetPayload._childSerializers$_anonymous_();
                return _childSerializers$_anonymous_;
            }
        }), l.a(oVar, new Function0() { // from class: com.discord.user_search_worker.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_$0;
                _childSerializers$_anonymous_$0 = UserSearchQuerySetPayload._childSerializers$_anonymous_$0();
                return _childSerializers$_anonymous_$0;
            }
        }), l.a(oVar, new Function0() { // from class: com.discord.user_search_worker.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_$1;
                _childSerializers$_anonymous_$1 = UserSearchQuerySetPayload._childSerializers$_anonymous_$1();
                return _childSerializers$_anonymous_$1;
            }
        }), null, null};
    }

    public /* synthetic */ UserSearchQuerySetPayload(int i10, String str, UserSearchQuerySetFilters userSearchQuerySetFilters, List list, List list2, Map map, double d10, int i11, SerializationConstructorMarker serializationConstructorMarker) {
        if (113 != (i10 & 113)) {
            v1.b(i10, 113, UserSearchQuerySetPayload$$serializer.INSTANCE.getDescriptor());
        }
        this.query = str;
        if ((i10 & 2) == 0) {
            this.filters = null;
        } else {
            this.filters = userSearchQuerySetFilters;
        }
        if ((i10 & 4) == 0) {
            this.blacklist = null;
        } else {
            this.blacklist = list;
        }
        if ((i10 & 8) == 0) {
            this.whitelist = null;
        } else {
            this.whitelist = list2;
        }
        this.boosters = map;
        this.boosterFallback = d10;
        this.limit = i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new at.f(n2.f6848a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$0() {
        return new at.f(n2.f6848a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$1() {
        return new u0(n2.f6848a, x.f6902a);
    }

    public static /* synthetic */ UserSearchQuerySetPayload copy$default(UserSearchQuerySetPayload userSearchQuerySetPayload, String str, UserSearchQuerySetFilters userSearchQuerySetFilters, List list, List list2, Map map, double d10, int i10, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            str = userSearchQuerySetPayload.query;
        }
        if ((i11 & 2) != 0) {
            userSearchQuerySetFilters = userSearchQuerySetPayload.filters;
        }
        List<String> list3 = list;
        if ((i11 & 4) != 0) {
            list3 = userSearchQuerySetPayload.blacklist;
        }
        List<String> list4 = list2;
        if ((i11 & 8) != 0) {
            list4 = userSearchQuerySetPayload.whitelist;
        }
        Map<String, Double> map2 = map;
        if ((i11 & 16) != 0) {
            map2 = userSearchQuerySetPayload.boosters;
        }
        if ((i11 & 32) != 0) {
            d10 = userSearchQuerySetPayload.boosterFallback;
        }
        if ((i11 & 64) != 0) {
            i10 = userSearchQuerySetPayload.limit;
        }
        int i12 = i10;
        double d11 = d10;
        Map map3 = map2;
        List list5 = list3;
        return userSearchQuerySetPayload.copy(str, userSearchQuerySetFilters, list5, list4, map3, d11, i12);
    }

    public static final /* synthetic */ void write$Self$user_search_worker_release(UserSearchQuerySetPayload userSearchQuerySetPayload, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.y(serialDescriptor, 0, userSearchQuerySetPayload.query);
        if (compositeEncoder.A(serialDescriptor, 1) || userSearchQuerySetPayload.filters != null) {
            compositeEncoder.z(serialDescriptor, 1, UserSearchQuerySetFilters$$serializer.INSTANCE, userSearchQuerySetPayload.filters);
        }
        if (compositeEncoder.A(serialDescriptor, 2) || userSearchQuerySetPayload.blacklist != null) {
            compositeEncoder.z(serialDescriptor, 2, (xs.o) lazyArr[2].getValue(), userSearchQuerySetPayload.blacklist);
        }
        if (compositeEncoder.A(serialDescriptor, 3) || userSearchQuerySetPayload.whitelist != null) {
            compositeEncoder.z(serialDescriptor, 3, (xs.o) lazyArr[3].getValue(), userSearchQuerySetPayload.whitelist);
        }
        compositeEncoder.j(serialDescriptor, 4, (xs.o) lazyArr[4].getValue(), userSearchQuerySetPayload.boosters);
        compositeEncoder.D(serialDescriptor, 5, userSearchQuerySetPayload.boosterFallback);
        compositeEncoder.w(serialDescriptor, 6, userSearchQuerySetPayload.limit);
    }

    @NotNull
    public final String component1() {
        return this.query;
    }

    public final UserSearchQuerySetFilters component2() {
        return this.filters;
    }

    public final List<String> component3() {
        return this.blacklist;
    }

    public final List<String> component4() {
        return this.whitelist;
    }

    @NotNull
    public final Map<String, Double> component5() {
        return this.boosters;
    }

    public final double component6() {
        return this.boosterFallback;
    }

    public final int component7() {
        return this.limit;
    }

    @NotNull
    public final UserSearchQuerySetPayload copy(@NotNull String query, UserSearchQuerySetFilters userSearchQuerySetFilters, List<String> list, List<String> list2, @NotNull Map<String, Double> boosters, double d10, int i10) {
        Intrinsics.checkNotNullParameter(query, "query");
        Intrinsics.checkNotNullParameter(boosters, "boosters");
        return new UserSearchQuerySetPayload(query, userSearchQuerySetFilters, list, list2, boosters, d10, i10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof UserSearchQuerySetPayload) {
            UserSearchQuerySetPayload userSearchQuerySetPayload = (UserSearchQuerySetPayload) obj;
            return Intrinsics.areEqual(this.query, userSearchQuerySetPayload.query) && Intrinsics.areEqual(this.filters, userSearchQuerySetPayload.filters) && Intrinsics.areEqual(this.blacklist, userSearchQuerySetPayload.blacklist) && Intrinsics.areEqual(this.whitelist, userSearchQuerySetPayload.whitelist) && Intrinsics.areEqual(this.boosters, userSearchQuerySetPayload.boosters) && Double.compare(this.boosterFallback, userSearchQuerySetPayload.boosterFallback) == 0 && this.limit == userSearchQuerySetPayload.limit;
        }
        return false;
    }

    public final List<String> getBlacklist() {
        return this.blacklist;
    }

    public final double getBoosterFallback() {
        return this.boosterFallback;
    }

    @NotNull
    public final Map<String, Double> getBoosters() {
        return this.boosters;
    }

    public final UserSearchQuerySetFilters getFilters() {
        return this.filters;
    }

    public final int getLimit() {
        return this.limit;
    }

    @NotNull
    public final String getQuery() {
        return this.query;
    }

    public final List<String> getWhitelist() {
        return this.whitelist;
    }

    public int hashCode() {
        int hashCode = this.query.hashCode() * 31;
        UserSearchQuerySetFilters userSearchQuerySetFilters = this.filters;
        int hashCode2 = (hashCode + (userSearchQuerySetFilters == null ? 0 : userSearchQuerySetFilters.hashCode())) * 31;
        List<String> list = this.blacklist;
        int hashCode3 = (hashCode2 + (list == null ? 0 : list.hashCode())) * 31;
        List<String> list2 = this.whitelist;
        return ((((((hashCode3 + (list2 != null ? list2.hashCode() : 0)) * 31) + this.boosters.hashCode()) * 31) + Double.hashCode(this.boosterFallback)) * 31) + Integer.hashCode(this.limit);
    }

    @NotNull
    public String toString() {
        String str = this.query;
        UserSearchQuerySetFilters userSearchQuerySetFilters = this.filters;
        List<String> list = this.blacklist;
        List<String> list2 = this.whitelist;
        Map<String, Double> map = this.boosters;
        double d10 = this.boosterFallback;
        int i10 = this.limit;
        return "UserSearchQuerySetPayload(query=" + str + ", filters=" + userSearchQuerySetFilters + ", blacklist=" + list + ", whitelist=" + list2 + ", boosters=" + map + ", boosterFallback=" + d10 + ", limit=" + i10 + ")";
    }

    public UserSearchQuerySetPayload(@NotNull String query, UserSearchQuerySetFilters userSearchQuerySetFilters, List<String> list, List<String> list2, @NotNull Map<String, Double> boosters, double d10, int i10) {
        Intrinsics.checkNotNullParameter(query, "query");
        Intrinsics.checkNotNullParameter(boosters, "boosters");
        this.query = query;
        this.filters = userSearchQuerySetFilters;
        this.blacklist = list;
        this.whitelist = list2;
        this.boosters = boosters;
        this.boosterFallback = d10;
        this.limit = i10;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ UserSearchQuerySetPayload(java.lang.String r2, com.discord.user_search_worker.UserSearchQuerySetFilters r3, java.util.List r4, java.util.List r5, java.util.Map r6, double r7, int r9, int r10, kotlin.jvm.internal.DefaultConstructorMarker r11) {
        /*
            r1 = this;
            r11 = r10 & 2
            r0 = 0
            if (r11 == 0) goto L6
            r3 = r0
        L6:
            r11 = r10 & 4
            if (r11 == 0) goto Lb
            r4 = r0
        Lb:
            r10 = r10 & 8
            if (r10 == 0) goto L18
            r10 = r9
            r8 = r7
            r7 = r6
            r6 = r0
        L13:
            r5 = r4
            r4 = r3
            r3 = r2
            r2 = r1
            goto L1d
        L18:
            r10 = r9
            r8 = r7
            r7 = r6
            r6 = r5
            goto L13
        L1d:
            r2.<init>(r3, r4, r5, r6, r7, r8, r10)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.user_search_worker.UserSearchQuerySetPayload.<init>(java.lang.String, com.discord.user_search_worker.UserSearchQuerySetFilters, java.util.List, java.util.List, java.util.Map, double, int, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
