package com.discord.user_search_worker;

import com.facebook.react.devsupport.StackTraceHelper;
import java.text.Normalizer;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.Regex;
import kotlin.text.m;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonBuilder;
import lr.p;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000d\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0010\u0006\n\u0002\b\u0010\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010%\n\u0002\b\u0005\b\u0000\u0018\u0000 82\u00020\u0001:\u00018B-\u0012$\u0010\u0007\u001a \u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00060\u0002¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00062\u0006\u0010\u000b\u001a\u00020\nH\u0002¢\u0006\u0004\b\f\u0010\rJ\u0017\u0010\u000f\u001a\u00020\u00062\u0006\u0010\u000b\u001a\u00020\u000eH\u0002¢\u0006\u0004\b\u000f\u0010\u0010J\u0017\u0010\u0012\u001a\u00020\u00062\u0006\u0010\u000b\u001a\u00020\u0011H\u0002¢\u0006\u0004\b\u0012\u0010\u0013J'\u0010\u001a\u001a\u00020\u00192\u0006\u0010\u0014\u001a\u00020\u00052\u0006\u0010\u0016\u001a\u00020\u00152\u0006\u0010\u0018\u001a\u00020\u0017H\u0002¢\u0006\u0004\b\u001a\u0010\u001bJ\u001f\u0010\u001e\u001a\u00020\u00192\u0006\u0010\u001c\u001a\u00020\u00052\u0006\u0010\u001d\u001a\u00020\u0005H\u0002¢\u0006\u0004\b\u001e\u0010\u001fJ'\u0010$\u001a\u00020 2\u0006\u0010!\u001a\u00020 2\u0006\u0010\"\u001a\u00020 2\u0006\u0010#\u001a\u00020 H\u0002¢\u0006\u0004\b$\u0010%J\u001f\u0010'\u001a\u00020\u00062\u0006\u0010&\u001a\u00020\u00052\u0006\u0010\u0018\u001a\u00020\u0017H\u0002¢\u0006\u0004\b'\u0010(J\u0015\u0010*\u001a\u00020\u00062\u0006\u0010)\u001a\u00020\u0005¢\u0006\u0004\b*\u0010+J\r\u0010,\u001a\u00020\u0006¢\u0006\u0004\b,\u0010-R5\u0010\u0007\u001a \u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00060\u00028\u0006¢\u0006\f\n\u0004\b\u0007\u0010.\u001a\u0004\b/\u00100R\u0014\u00102\u001a\u0002018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b2\u00103R \u00105\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0015048\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b5\u00106R \u00107\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0017048\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b7\u00106¨\u00069"}, d2 = {"Lcom/discord/user_search_worker/UserSearchWorker;", "", "Lkotlin/Function3;", "", "Lcom/discord/user_search_worker/UserSearchWorkerResult;", "", "", "onResults", "<init>", "(Lkotlin/jvm/functions/Function3;)V", "Lcom/discord/user_search_worker/UserSearchUpdateUsersData;", "data", "mergeUsers", "(Lcom/discord/user_search_worker/UserSearchUpdateUsersData;)V", "Lcom/discord/user_search_worker/UserSearchQuerySetData;", "setNewQuery", "(Lcom/discord/user_search_worker/UserSearchQuerySetData;)V", "Lcom/discord/user_search_worker/UserSearchQueryClearData;", "clearQuery", "(Lcom/discord/user_search_worker/UserSearchQueryClearData;)V", StackTraceHelper.ID_KEY, "Lcom/discord/user_search_worker/UserSearchTransformedUser;", "user", "Lcom/discord/user_search_worker/UserSearchQuerySetPayload;", "payload", "", "isValid", "(Ljava/lang/String;Lcom/discord/user_search_worker/UserSearchTransformedUser;Lcom/discord/user_search_worker/UserSearchQuerySetPayload;)Z", "needleBase", "haystackBase", "fuzzySearch", "(Ljava/lang/String;Ljava/lang/String;)Z", "", "score", "booster", "boosterFallback", "calculateScore", "(DDD)D", "uuid", "searchUsers", "(Ljava/lang/String;Lcom/discord/user_search_worker/UserSearchQuerySetPayload;)V", "dataJSON", "onMessage", "(Ljava/lang/String;)V", "terminate", "()V", "Lkotlin/jvm/functions/Function3;", "getOnResults", "()Lkotlin/jvm/functions/Function3;", "Lkotlinx/serialization/json/Json;", "json", "Lkotlinx/serialization/json/Json;", "", "users", "Ljava/util/Map;", "queries", "Companion", "user_search_worker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nUserSearchWorker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 UserSearchWorker.kt\ncom/discord/user_search_worker/UserSearchWorker\n+ 2 Json.kt\nkotlinx/serialization/json/Json\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n*L\n1#1,283:1\n147#2:284\n1869#3,2:285\n216#4,2:287\n*S KotlinDebug\n*F\n+ 1 UserSearchWorker.kt\ncom/discord/user_search_worker/UserSearchWorker\n*L\n26#1:284\n47#1:285,2\n70#1:287,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class UserSearchWorker {
    private static final double CONTAIN_MATCH_VALUE = 5.0d;
    private static final double EXACT_MATCH_VALUE = 10.0d;
    private static final double FUZZY_MATCH_VALUE = 1.0d;
    @NotNull
    private final Json json;
    @NotNull
    private final Function3 onResults;
    @NotNull
    private final Map<String, UserSearchQuerySetPayload> queries;
    @NotNull
    private final Map<String, UserSearchTransformedUser> users;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Regex STRIP_DIACRITICS_REGEX_PATTERN = new Regex("[\\u0300-\\u036f]");

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001:\u0001\fB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\n\u001a\u00020\u000b*\u00020\u000bH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\r"}, d2 = {"Lcom/discord/user_search_worker/UserSearchWorker$Companion;", "", "<init>", "()V", "EXACT_MATCH_VALUE", "", "CONTAIN_MATCH_VALUE", "FUZZY_MATCH_VALUE", "STRIP_DIACRITICS_REGEX_PATTERN", "Lkotlin/text/Regex;", "strippedOfDiacritics", "", "LocalResult", "user_search_worker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {

        /* JADX INFO: Access modifiers changed from: private */
        @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0006\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0082\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\t\u0010\f\u001a\u00020\u0003HÆ\u0003J\t\u0010\r\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u000e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0012\u001a\u00020\u0013HÖ\u0001J\t\u0010\u0014\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u0015"}, d2 = {"Lcom/discord/user_search_worker/UserSearchWorker$Companion$LocalResult;", "", "comparator", "", "score", "", "<init>", "(Ljava/lang/String;D)V", "getComparator", "()Ljava/lang/String;", "getScore", "()D", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "user_search_worker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class LocalResult {
            @NotNull
            private final String comparator;
            private final double score;

            public LocalResult(@NotNull String comparator, double d10) {
                Intrinsics.checkNotNullParameter(comparator, "comparator");
                this.comparator = comparator;
                this.score = d10;
            }

            public static /* synthetic */ LocalResult copy$default(LocalResult localResult, String str, double d10, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    str = localResult.comparator;
                }
                if ((i10 & 2) != 0) {
                    d10 = localResult.score;
                }
                return localResult.copy(str, d10);
            }

            @NotNull
            public final String component1() {
                return this.comparator;
            }

            public final double component2() {
                return this.score;
            }

            @NotNull
            public final LocalResult copy(@NotNull String comparator, double d10) {
                Intrinsics.checkNotNullParameter(comparator, "comparator");
                return new LocalResult(comparator, d10);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof LocalResult) {
                    LocalResult localResult = (LocalResult) obj;
                    return Intrinsics.areEqual(this.comparator, localResult.comparator) && Double.compare(this.score, localResult.score) == 0;
                }
                return false;
            }

            @NotNull
            public final String getComparator() {
                return this.comparator;
            }

            public final double getScore() {
                return this.score;
            }

            public int hashCode() {
                return (this.comparator.hashCode() * 31) + Double.hashCode(this.score);
            }

            @NotNull
            public String toString() {
                String str = this.comparator;
                double d10 = this.score;
                return "LocalResult(comparator=" + str + ", score=" + d10 + ")";
            }
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final String strippedOfDiacritics(String str) {
            String normalize = Normalizer.normalize(str, Normalizer.Form.NFD);
            Intrinsics.checkNotNull(normalize);
            return UserSearchWorker.STRIP_DIACRITICS_REGEX_PATTERN.replace(normalize, "");
        }

        private Companion() {
        }
    }

    public UserSearchWorker(@NotNull Function3 onResults) {
        Intrinsics.checkNotNullParameter(onResults, "onResults");
        this.onResults = onResults;
        this.json = kotlinx.serialization.json.b.b(null, new Function1() { // from class: com.discord.user_search_worker.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit json$lambda$0;
                json$lambda$0 = UserSearchWorker.json$lambda$0((JsonBuilder) obj);
                return json$lambda$0;
            }
        }, 1, null);
        this.users = new LinkedHashMap();
        this.queries = new LinkedHashMap();
    }

    private final double calculateScore(double d10, double d11, double d12) {
        if (d11 == 0.0d) {
            d11 = d12;
        }
        return d10 * d11;
    }

    private final void clearQuery(UserSearchQueryClearData userSearchQueryClearData) {
        this.queries.remove(userSearchQueryClearData.getUuid());
    }

    private final boolean fuzzySearch(String str, String str2) {
        Locale locale = Locale.ROOT;
        String lowerCase = str.toLowerCase(locale);
        Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
        String lowerCase2 = str2.toLowerCase(locale);
        Intrinsics.checkNotNullExpressionValue(lowerCase2, "toLowerCase(...)");
        int length = lowerCase2.length();
        int length2 = lowerCase.length();
        if (length2 > length) {
            return false;
        }
        if (length2 == length) {
            return Intrinsics.areEqual(lowerCase, lowerCase2);
        }
        int length3 = lowerCase.length();
        int i10 = 0;
        for (int i11 = 0; i11 < length3; i11++) {
            char charAt = lowerCase.charAt(i11);
            while (true) {
                if (i10 >= length) {
                    break;
                }
                int i12 = i10 + 1;
                if (lowerCase2.charAt(i10) == charAt) {
                    i10 = i12;
                    break;
                }
                i10 = i12;
            }
            if (i10 == length) {
                return false;
            }
        }
        return true;
    }

    private final boolean isValid(String str, UserSearchTransformedUser userSearchTransformedUser, UserSearchQuerySetPayload userSearchQuerySetPayload) {
        UserSearchQuerySetFilters filters;
        boolean z10;
        boolean z11;
        if (userSearchQuerySetPayload.getBlacklist() != null && userSearchQuerySetPayload.getBlacklist().contains(str)) {
            return false;
        }
        if ((userSearchQuerySetPayload.getWhitelist() != null && userSearchQuerySetPayload.getWhitelist().contains(str)) || (filters = userSearchQuerySetPayload.getFilters()) == null) {
            return true;
        }
        Boolean friends = filters.getFriends();
        if (friends != null) {
            z10 = friends.booleanValue();
        } else {
            z10 = false;
        }
        Boolean isFriend = userSearchTransformedUser.isFriend();
        if (isFriend != null) {
            z11 = isFriend.booleanValue();
        } else {
            z11 = false;
        }
        String guild = filters.getGuild();
        if ((!z10 || !z11) && !userSearchTransformedUser.getNicknames().containsKey(guild)) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit json$lambda$0(JsonBuilder Json) {
        Intrinsics.checkNotNullParameter(Json, "$this$Json");
        Json.c(true);
        return Unit.f32464a;
    }

    /* JADX WARN: Code restructure failed: missing block: B:35:0x00a1, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r3, r4) == false) goto L37;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void mergeUsers(com.discord.user_search_worker.UserSearchUpdateUsersData r14) {
        /*
            r13 = this;
            java.util.LinkedHashSet r0 = new java.util.LinkedHashSet
            r0.<init>()
            java.util.List r14 = r14.getPayload()
            java.lang.Iterable r14 = (java.lang.Iterable) r14
            java.util.Iterator r14 = r14.iterator()
            r1 = 0
        L10:
            boolean r2 = r14.hasNext()
            if (r2 == 0) goto Lb3
            java.lang.Object r2 = r14.next()
            com.discord.user_search_worker.UserSearchTransformedUser r2 = (com.discord.user_search_worker.UserSearchTransformedUser) r2
            java.lang.String r3 = r2.getId()
            java.util.Map<java.lang.String, com.discord.user_search_worker.UserSearchTransformedUser> r4 = r13.users
            java.lang.Object r4 = r4.get(r3)
            r5 = r4
            com.discord.user_search_worker.UserSearchTransformedUser r5 = (com.discord.user_search_worker.UserSearchTransformedUser) r5
            if (r5 == 0) goto L73
            java.lang.String r6 = r2.getId()
            java.lang.String r7 = r2.getUsername()
            java.lang.Boolean r4 = r2.isBot()
            if (r4 != 0) goto L3d
            java.lang.Boolean r4 = r5.isBot()
        L3d:
            r8 = r4
            java.lang.Boolean r4 = r2.isFriend()
            if (r4 != 0) goto L48
            java.lang.Boolean r4 = r5.isFriend()
        L48:
            r9 = r4
            java.lang.String r4 = r2.getFriendNickname()
            if (r4 != 0) goto L53
            java.lang.String r4 = r5.getFriendNickname()
        L53:
            r10 = r4
            java.lang.String r4 = r2.getGlobalName()
            if (r4 != 0) goto L5e
            java.lang.String r4 = r5.getGlobalName()
        L5e:
            r11 = r4
            java.util.Map r4 = r5.getNicknames()
            java.util.Map r12 = r2.getNicknames()
            java.util.Map r12 = kotlin.collections.o0.q(r4, r12)
            com.discord.user_search_worker.UserSearchTransformedUser r4 = r5.copy(r6, r7, r8, r9, r10, r11, r12)
            if (r4 != 0) goto L72
            goto L73
        L72:
            r2 = r4
        L73:
            java.util.Map<java.lang.String, com.discord.user_search_worker.UserSearchTransformedUser> r4 = r13.users
            r4.put(r3, r2)
            java.util.Map<java.lang.String, com.discord.user_search_worker.UserSearchQuerySetPayload> r3 = r13.queries
            boolean r3 = r3.isEmpty()
            if (r3 != 0) goto L10
            java.lang.Boolean r3 = r2.isFriend()
            r4 = 0
            if (r5 == 0) goto L8c
            java.lang.Boolean r6 = r5.isFriend()
            goto L8d
        L8c:
            r6 = r4
        L8d:
            boolean r3 = kotlin.jvm.internal.Intrinsics.areEqual(r3, r6)
            if (r3 == 0) goto La3
            java.lang.String r3 = r2.getFriendNickname()
            if (r5 == 0) goto L9d
            java.lang.String r4 = r5.getFriendNickname()
        L9d:
            boolean r3 = kotlin.jvm.internal.Intrinsics.areEqual(r3, r4)
            if (r3 != 0) goto La4
        La3:
            r1 = 1
        La4:
            java.util.Map r2 = r2.getNicknames()
            java.util.Set r2 = r2.keySet()
            java.util.Collection r2 = (java.util.Collection) r2
            r0.addAll(r2)
            goto L10
        Lb3:
            java.util.Map<java.lang.String, com.discord.user_search_worker.UserSearchQuerySetPayload> r14 = r13.queries
            java.util.Set r14 = r14.entrySet()
            java.util.Iterator r14 = r14.iterator()
        Lbd:
            boolean r2 = r14.hasNext()
            if (r2 == 0) goto Lfd
            java.lang.Object r2 = r14.next()
            java.util.Map$Entry r2 = (java.util.Map.Entry) r2
            java.lang.Object r3 = r2.getKey()
            java.lang.String r3 = (java.lang.String) r3
            java.lang.Object r2 = r2.getValue()
            com.discord.user_search_worker.UserSearchQuerySetPayload r2 = (com.discord.user_search_worker.UserSearchQuerySetPayload) r2
            com.discord.user_search_worker.UserSearchQuerySetFilters r4 = r2.getFilters()
            if (r4 == 0) goto Lf9
            java.lang.Boolean r5 = r4.getFriends()
            java.lang.Boolean r6 = java.lang.Boolean.valueOf(r1)
            boolean r5 = kotlin.jvm.internal.Intrinsics.areEqual(r5, r6)
            if (r5 != 0) goto Lf9
            java.lang.String r5 = r4.getGuild()
            if (r5 == 0) goto Lbd
            java.lang.String r4 = r4.getGuild()
            boolean r4 = r0.contains(r4)
            if (r4 == 0) goto Lbd
        Lf9:
            r13.searchUsers(r3, r2)
            goto Lbd
        Lfd:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.user_search_worker.UserSearchWorker.mergeUsers(com.discord.user_search_worker.UserSearchUpdateUsersData):void");
    }

    private final void searchUsers(String str, UserSearchQuerySetPayload userSearchQuerySetPayload) {
        boolean z10;
        double d10;
        List L0;
        UserSearchWorkerResult userSearchWorkerResult;
        double d11;
        char c10;
        boolean z11;
        double d12;
        Companion.LocalResult localResult;
        Companion.LocalResult localResult2;
        String str2;
        Boolean strict;
        UserSearchWorker userSearchWorker = this;
        String query = userSearchQuerySetPayload.getQuery();
        UserSearchQuerySetFilters filters = userSearchQuerySetPayload.getFilters();
        char c11 = 0;
        if (filters != null && (strict = filters.getStrict()) != null) {
            z10 = strict.booleanValue();
        } else {
            z10 = false;
        }
        ArrayList arrayList = new ArrayList();
        if (query.length() == 0) {
            userSearchWorker.onResults.invoke(arrayList, query, str);
            return;
        }
        String c12 = Regex.f35387e.c(query);
        m mVar = m.f35447i;
        Regex regex = new Regex("^" + c12, mVar);
        Regex regex2 = new Regex(c12, mVar);
        for (Map.Entry<String, UserSearchTransformedUser> entry : userSearchWorker.users.entrySet()) {
            String key = entry.getKey();
            UserSearchTransformedUser value = entry.getValue();
            String username = value.getUsername();
            if (userSearchWorker.isValid(key, value, userSearchQuerySetPayload)) {
                Double d13 = userSearchQuerySetPayload.getBoosters().get(key);
                if (d13 != null) {
                    d10 = d13.doubleValue();
                } else {
                    d10 = 0.0d;
                }
                double boosterFallback = userSearchQuerySetPayload.getBoosterFallback();
                if (Intrinsics.areEqual(key, query)) {
                    userSearchWorkerResult = new UserSearchWorkerResult(key, username, key, userSearchWorker.calculateScore(EXACT_MATCH_VALUE, d10, boosterFallback));
                } else {
                    if (z10) {
                        String[] strArr = new String[4];
                        strArr[c11] = value.getUsername();
                        strArr[1] = value.getGlobalName();
                        strArr[2] = value.getFriendNickname();
                        Map<String, String> nicknames = value.getNicknames();
                        UserSearchQuerySetFilters filters2 = userSearchQuerySetPayload.getFilters();
                        if (filters2 != null) {
                            str2 = filters2.getGuild();
                        } else {
                            str2 = null;
                        }
                        strArr[3] = nicknames.get(str2);
                        L0 = CollectionsKt.o(strArr);
                    } else if (!z10) {
                        L0 = CollectionsKt.L0(CollectionsKt.o(value.getUsername(), value.getGlobalName(), value.getFriendNickname()), value.getNicknames().values());
                    } else {
                        throw new p();
                    }
                    userSearchWorkerResult = null;
                    for (String str3 : CollectionsKt.l0(L0)) {
                        if (regex.b(str3)) {
                            c10 = c11;
                            z11 = z10;
                            d11 = d10;
                            d12 = boosterFallback;
                            localResult2 = new Companion.LocalResult(str3, calculateScore(EXACT_MATCH_VALUE, d11, d12));
                        } else {
                            d11 = d10;
                            c10 = c11;
                            z11 = z10;
                            d12 = boosterFallback;
                            if (regex2.b(str3)) {
                                localResult2 = new Companion.LocalResult(str3, calculateScore(CONTAIN_MATCH_VALUE, d11, d12));
                            } else if (fuzzySearch(query, Companion.strippedOfDiacritics(str3))) {
                                localResult2 = new Companion.LocalResult(str3, calculateScore(FUZZY_MATCH_VALUE, d11, d12));
                            } else {
                                localResult = null;
                                if (localResult != null && (userSearchWorkerResult == null || userSearchWorkerResult.getScore() < localResult.getScore())) {
                                    userSearchWorkerResult = new UserSearchWorkerResult(key, username, localResult.getComparator(), localResult.getScore());
                                }
                                boosterFallback = d12;
                                c11 = c10;
                                z10 = z11;
                                d10 = d11;
                            }
                        }
                        localResult = localResult2;
                        if (localResult != null) {
                            userSearchWorkerResult = new UserSearchWorkerResult(key, username, localResult.getComparator(), localResult.getScore());
                        }
                        boosterFallback = d12;
                        c11 = c10;
                        z10 = z11;
                        d10 = d11;
                    }
                }
                userSearchWorker = this;
                char c13 = c11;
                boolean z12 = z10;
                if (userSearchWorkerResult != null) {
                    arrayList.add(userSearchWorkerResult);
                }
                c11 = c13;
                z10 = z12;
            }
        }
        Function1 function1 = new Function1() { // from class: com.discord.user_search_worker.f
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Comparable searchUsers$lambda$3;
                searchUsers$lambda$3 = UserSearchWorker.searchUsers$lambda$3((UserSearchWorkerResult) obj);
                return searchUsers$lambda$3;
            }
        };
        Function1 function12 = new Function1() { // from class: com.discord.user_search_worker.g
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Comparable searchUsers$lambda$4;
                searchUsers$lambda$4 = UserSearchWorker.searchUsers$lambda$4((UserSearchWorkerResult) obj);
                return searchUsers$lambda$4;
            }
        };
        Function1[] function1Arr = new Function1[2];
        function1Arr[c11] = function1;
        function1Arr[1] = function12;
        userSearchWorker.onResults.invoke(CollectionsKt.a1(CollectionsKt.W0(arrayList, or.a.b(function1Arr)), userSearchQuerySetPayload.getLimit()), query, str);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Comparable searchUsers$lambda$3(UserSearchWorkerResult it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Double.valueOf(-it.getScore());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Comparable searchUsers$lambda$4(UserSearchWorkerResult it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return it.getComparator();
    }

    private final void setNewQuery(UserSearchQuerySetData userSearchQuerySetData) {
        this.queries.put(userSearchQuerySetData.getUuid(), userSearchQuerySetData.getPayload());
        searchUsers(userSearchQuerySetData.getUuid(), userSearchQuerySetData.getPayload());
    }

    @NotNull
    public final Function3 getOnResults() {
        return this.onResults;
    }

    public final void onMessage(@NotNull String dataJSON) {
        Intrinsics.checkNotNullParameter(dataJSON, "dataJSON");
        Json json = this.json;
        json.a();
        UserSearchData userSearchData = (UserSearchData) json.b(UserSearchData.Companion.serializer(), dataJSON);
        if (userSearchData instanceof UserSearchUpdateUsersData) {
            mergeUsers((UserSearchUpdateUsersData) userSearchData);
        } else if (userSearchData instanceof UserSearchQuerySetData) {
            setNewQuery((UserSearchQuerySetData) userSearchData);
        } else if (userSearchData instanceof UserSearchQueryClearData) {
            clearQuery((UserSearchQueryClearData) userSearchData);
        } else {
            throw new p();
        }
    }

    public final void terminate() {
        this.users.clear();
        this.queries.clear();
    }
}
