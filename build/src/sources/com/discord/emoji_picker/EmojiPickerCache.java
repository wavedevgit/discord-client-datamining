package com.discord.emoji_picker;

import android.content.Context;
import com.discord.cache.Cache;
import com.discord.crash_reporting.CrashReporting;
import com.discord.emoji_picker.EmojiPickerItem;
import com.discord.emoji_picker.EmojiPickerItemData;
import com.discord.kvstorage.discordapp.DiscordMobileApi;
import com.discord.misc.utilities.coroutines.CollectWithLeadingDebounceKt;
import com.facebook.react.devsupport.StackTraceHelper;
import gs.m0;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonBuilder;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonObject;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0006\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0000\u0018\u0000  2\u00020\u0001:\u0002\u001f B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\b\u0010\u0013\u001a\u00020\u0012H\u0007J\u0014\u0010\u0014\u001a\u00020\u00122\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0005H\u0007J\u000e\u0010\u0016\u001a\u00020\u0012H\u0082@¢\u0006\u0002\u0010\u0017J\u000e\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u001a0\u0019H\u0002J\u001c\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u001a0\u00192\u0006\u0010\u001c\u001a\u00020\u001dH\u0082@¢\u0006\u0002\u0010\u001eR\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00030\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u000e\u001a\u0004\u0018\u00010\u000fX\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\u00120\u0011X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006!"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerCache;", "", "listener", "Lcom/discord/emoji_picker/EmojiPickerCache$Listener;", "emojiCoreData", "Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData;", "<init>", "(Lcom/discord/emoji_picker/EmojiPickerCache$Listener;Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData;)V", "emojiPickerListener", "Ljava/lang/ref/WeakReference;", "emojiJsonConfig", "Lkotlinx/serialization/json/Json;", "emojiCoroutineScope", "Lkotlinx/coroutines/CoroutineScope;", "emojiFetchJob", "Lkotlinx/coroutines/Job;", "emojiFetchEvents", "Lkotlinx/coroutines/flow/MutableSharedFlow;", "", "invalidate", "refreshEmojis", "emojiCodeData", "refreshDatabaseEmojis", "(Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "buildEmojis", "", "Lcom/discord/emoji_picker/EmojiPickerItem;", "buildEmojisUnicode", "context", "Landroid/content/Context;", "(Landroid/content/Context;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Listener", "Companion", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nEmojiPickerCache.kt\nKotlin\n*S Kotlin\n*F\n+ 1 EmojiPickerCache.kt\ncom/discord/emoji_picker/EmojiPickerCache\n+ 2 ThreadUtils.kt\ncom/discord/misc/utilities/threading/ThreadUtilsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,186:1\n25#2,8:187\n1#3:195\n1878#4,2:196\n1563#4:198\n1634#4,3:199\n1056#4:202\n1869#4,2:203\n1880#4:205\n1878#4,2:206\n1869#4,2:208\n1880#4:210\n*S KotlinDebug\n*F\n+ 1 EmojiPickerCache.kt\ncom/discord/emoji_picker/EmojiPickerCache\n*L\n70#1:187,8\n90#1:196,2\n109#1:198\n109#1:199,3\n128#1:202\n133#1:203,2\n90#1:205\n156#1:206,2\n158#1:208,2\n156#1:210\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class EmojiPickerCache {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final long DEBOUNCE_INTERVAL = 3000;
    @NotNull
    private EmojiPickerItemData.CoreData emojiCoreData;
    @NotNull
    private final CoroutineScope emojiCoroutineScope;
    @NotNull
    private final MutableSharedFlow emojiFetchEvents;
    private Job emojiFetchJob;
    @NotNull
    private final Json emojiJsonConfig;
    @NotNull
    private final WeakReference<Listener> emojiPickerListener;

    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @kotlin.coroutines.jvm.internal.e(c = "com.discord.emoji_picker.EmojiPickerCache$1", f = "EmojiPickerCache.kt", l = {42}, m = "invokeSuspend")
    /* renamed from: com.discord.emoji_picker.EmojiPickerCache$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class AnonymousClass1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
        int label;

        AnonymousClass1(Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            return new AnonymousClass1(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.label;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow mutableSharedFlow = EmojiPickerCache.this.emojiFetchEvents;
                final EmojiPickerCache emojiPickerCache = EmojiPickerCache.this;
                FlowCollector flowCollector = new FlowCollector() { // from class: com.discord.emoji_picker.EmojiPickerCache.1.1
                    @Override // kotlinx.coroutines.flow.FlowCollector
                    public /* bridge */ /* synthetic */ Object emit(Object obj2, Continuation continuation) {
                        return emit((Unit) obj2, (Continuation<? super Unit>) continuation);
                    }

                    public final Object emit(Unit unit, Continuation<? super Unit> continuation) {
                        Object refreshDatabaseEmojis = EmojiPickerCache.this.refreshDatabaseEmojis(continuation);
                        return refreshDatabaseEmojis == or.b.f() ? refreshDatabaseEmojis : Unit.f33298a;
                    }
                };
                this.label = 1;
                if (CollectWithLeadingDebounceKt.collectWithLeadingDebounce(mutableSharedFlow, EmojiPickerCache.DEBOUNCE_INTERVAL, flowCollector, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
            return ((AnonymousClass1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\t\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerCache$Companion;", "", "<init>", "()V", "DEBOUNCE_INTERVAL", "", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\bf\u0018\u00002\u00020\u0001J$\u0010\u0002\u001a\u00020\u00032\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u00052\f\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005H'J\b\u0010\b\u001a\u00020\tH&¨\u0006\n"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerCache$Listener;", "", "onEmojisUpdated", "", "emojis", "", "Lcom/discord/emoji_picker/EmojiPickerItem;", "emojisUnicode", "onContext", "Landroid/content/Context;", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface Listener {
        @NotNull
        Context onContext();

        void onEmojisUpdated(@NotNull List<? extends EmojiPickerItem> list, @NotNull List<? extends EmojiPickerItem> list2);
    }

    public EmojiPickerCache(@NotNull Listener listener, @NotNull EmojiPickerItemData.CoreData emojiCoreData) {
        Job d10;
        Intrinsics.checkNotNullParameter(listener, "listener");
        Intrinsics.checkNotNullParameter(emojiCoreData, "emojiCoreData");
        this.emojiCoreData = emojiCoreData;
        this.emojiPickerListener = new WeakReference<>(listener);
        this.emojiJsonConfig = kotlinx.serialization.json.b.b(null, new Function1() { // from class: com.discord.emoji_picker.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit emojiJsonConfig$lambda$0;
                emojiJsonConfig$lambda$0 = EmojiPickerCache.emojiJsonConfig$lambda$0((JsonBuilder) obj);
                return emojiJsonConfig$lambda$0;
            }
        }, 1, null);
        CoroutineScope a10 = kotlinx.coroutines.i.a(m0.a());
        this.emojiCoroutineScope = a10;
        this.emojiFetchEvents = js.c0.b(0, 1, null, 4, null);
        d10 = gs.i.d(a10, null, null, new AnonymousClass1(null), 3, null);
        this.emojiFetchJob = d10;
    }

    private final List<EmojiPickerItem> buildEmojis() {
        boolean z10;
        HashMap<String, ArrayList<String>> hashMap;
        boolean z11;
        List list;
        boolean z12;
        boolean z13;
        EmojiPickerCache emojiPickerCache = this;
        String item = Cache.Companion.get().getItem("_userIdKey");
        try {
            HashMap<String, ArrayList<String>> guildEmojis = DiscordMobileApi.getGuildEmojis("@account." + item);
            Collection<ArrayList<String>> values = guildEmojis.values();
            Intrinsics.checkNotNullExpressionValue(values, "<get-values>(...)");
            Iterator<T> it = values.iterator();
            int i10 = 0;
            while (true) {
                z10 = true;
                if (!it.hasNext()) {
                    break;
                }
                i10 += ((ArrayList) it.next()).size() + 1;
            }
            ArrayList arrayList = new ArrayList(i10);
            int i11 = 0;
            boolean z14 = false;
            for (Object obj : emojiPickerCache.emojiCoreData.getNativeSectionsEmojis()) {
                int i12 = i11 + 1;
                if (i11 < 0) {
                    CollectionsKt.v();
                }
                EmojiPickerItemData.CoreData.NativeSection.Guild guild = (EmojiPickerItemData.CoreData.NativeSection.Guild) obj;
                if (guild.getHasPremiumInlineRoadblockHeader()) {
                    String guildId = guild.getGuildId();
                    arrayList.add(new EmojiPickerItem.PremiumInlineRoadblockHeader("premium-inline-roadblock-header-" + guildId));
                    z14 = z10;
                }
                arrayList.add(new EmojiPickerItem.Category(guild.getGuildName(), Long.parseLong(guild.getGuildId()), z14));
                ArrayList<String> arrayList2 = guildEmojis.get(guild.getGuildId());
                if (arrayList2 != null) {
                    ArrayList arrayList3 = new ArrayList(CollectionsKt.w(arrayList2, 10));
                    for (String str : arrayList2) {
                        Json json = emojiPickerCache.emojiJsonConfig;
                        Intrinsics.checkNotNull(str);
                        JsonObject n10 = bt.h.n(json.g(str));
                        Object obj2 = n10.get(StackTraceHelper.ID_KEY);
                        Intrinsics.checkNotNull(obj2);
                        long q10 = bt.h.q(bt.h.o((JsonElement) obj2));
                        Object obj3 = n10.get(StackTraceHelper.NAME_KEY);
                        Intrinsics.checkNotNull(obj3);
                        String b10 = bt.h.o((JsonElement) obj3).b();
                        Object obj4 = n10.get("animated");
                        Intrinsics.checkNotNull(obj4);
                        boolean f10 = bt.h.f(bt.h.o((JsonElement) obj4));
                        if (!guild.isNitroLocked() && !guild.getEmojisDisabled().contains(Long.valueOf(q10))) {
                            z13 = false;
                        } else {
                            z13 = true;
                        }
                        ArrayList arrayList4 = arrayList3;
                        arrayList4.add(new EmojiPickerItem.Emoji(q10, b10, f10, EmojiPickerItem.Emoji.DisabledType.Companion.create(z13, guild.isNitroLocked()), null, z14, 16, null));
                        emojiPickerCache = this;
                        arrayList3 = arrayList4;
                        guildEmojis = guildEmojis;
                    }
                    hashMap = guildEmojis;
                    z11 = z14;
                    list = CollectionsKt.W0(arrayList3, new Comparator() { // from class: com.discord.emoji_picker.EmojiPickerCache$buildEmojis$lambda$7$$inlined$sortedBy$1
                        @Override // java.util.Comparator
                        public final int compare(T t10, T t11) {
                            return lr.a.d(((EmojiPickerItem.Emoji) t10).getName(), ((EmojiPickerItem.Emoji) t11).getName());
                        }
                    });
                } else {
                    hashMap = guildEmojis;
                    z11 = z14;
                    list = null;
                }
                if (list != null) {
                    arrayList.addAll(list);
                    z12 = false;
                } else {
                    z12 = false;
                    Iterator it2 = kotlin.ranges.d.u(0, guild.getEmojiCount()).iterator();
                    while (it2.hasNext()) {
                        arrayList.add(new EmojiPickerItem.EmojiPlaceholder((i11 * 1000) + ((kotlin.collections.m0) it2).nextInt()));
                    }
                }
                if (guild.getHasPremiumInlineRoadblockFooter()) {
                    String guildId2 = guild.getGuildId();
                    arrayList.add(new EmojiPickerItem.PremiumInlineRoadblockFooter("premium-inline-roadblock-footer-" + guildId2));
                    z14 = z12;
                } else {
                    z14 = z11;
                }
                emojiPickerCache = this;
                i11 = i12;
                guildEmojis = hashMap;
                z10 = true;
            }
            return arrayList;
        } catch (Exception e10) {
            CrashReporting.INSTANCE.captureMessage("Unable to read guild emojis from cache.", e10);
            return CollectionsKt.l();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0027  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0035  */
    /* JADX WARN: Removed duplicated region for block: B:20:0x0059 A[LOOP:0: B:18:0x0053->B:20:0x0059, LOOP_END] */
    /* JADX WARN: Removed duplicated region for block: B:24:0x007d  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object buildEmojisUnicode(android.content.Context r18, kotlin.coroutines.Continuation<? super java.util.List<? extends com.discord.emoji_picker.EmojiPickerItem>> r19) {
        /*
            Method dump skipped, instructions count: 236
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.emoji_picker.EmojiPickerCache.buildEmojisUnicode(android.content.Context, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit emojiJsonConfig$lambda$0(JsonBuilder Json) {
        Intrinsics.checkNotNullParameter(Json, "$this$Json");
        Json.c(true);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0035  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x0067  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x0077  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object refreshDatabaseEmojis(kotlin.coroutines.Continuation<? super kotlin.Unit> r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof com.discord.emoji_picker.EmojiPickerCache$refreshDatabaseEmojis$1
            if (r0 == 0) goto L13
            r0 = r5
            com.discord.emoji_picker.EmojiPickerCache$refreshDatabaseEmojis$1 r0 = (com.discord.emoji_picker.EmojiPickerCache$refreshDatabaseEmojis$1) r0
            int r1 = r0.label
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.label = r1
            goto L18
        L13:
            com.discord.emoji_picker.EmojiPickerCache$refreshDatabaseEmojis$1 r0 = new com.discord.emoji_picker.EmojiPickerCache$refreshDatabaseEmojis$1
            r0.<init>(r4, r5)
        L18:
            java.lang.Object r5 = r0.result
            java.lang.Object r1 = or.b.f()
            int r2 = r0.label
            r3 = 1
            if (r2 == 0) goto L35
            if (r2 != r3) goto L2d
            java.lang.Object r0 = r0.L$0
            java.util.List r0 = (java.util.List) r0
            kotlin.c.b(r5)
            goto L5f
        L2d:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r5.<init>(r0)
            throw r5
        L35:
            kotlin.c.b(r5)
            java.lang.ref.WeakReference<com.discord.emoji_picker.EmojiPickerCache$Listener> r5 = r4.emojiPickerListener
            java.lang.Object r5 = r5.get()
            com.discord.emoji_picker.EmojiPickerCache$Listener r5 = (com.discord.emoji_picker.EmojiPickerCache.Listener) r5
            if (r5 == 0) goto L47
            android.content.Context r5 = r5.onContext()
            goto L48
        L47:
            r5 = 0
        L48:
            boolean r2 = r5 instanceof com.facebook.react.bridge.ReactContext
            if (r2 != 0) goto L4f
            kotlin.Unit r5 = kotlin.Unit.f33298a
            return r5
        L4f:
            java.util.List r2 = r4.buildEmojis()
            r0.L$0 = r2
            r0.label = r3
            java.lang.Object r5 = r4.buildEmojisUnicode(r5, r0)
            if (r5 != r1) goto L5e
            return r1
        L5e:
            r0 = r2
        L5f:
            java.util.List r5 = (java.util.List) r5
            boolean r1 = com.discord.misc.utilities.threading.ThreadUtilsKt.isOnMainThread()
            if (r1 == 0) goto L77
            java.lang.ref.WeakReference r1 = access$getEmojiPickerListener$p(r4)
            java.lang.Object r1 = r1.get()
            com.discord.emoji_picker.EmojiPickerCache$Listener r1 = (com.discord.emoji_picker.EmojiPickerCache.Listener) r1
            if (r1 == 0) goto L83
            r1.onEmojisUpdated(r0, r5)
            goto L83
        L77:
            android.os.Handler r1 = com.discord.misc.utilities.threading.ThreadUtilsKt.getUiHandler()
            com.discord.emoji_picker.EmojiPickerCache$refreshDatabaseEmojis$$inlined$postOrRunOnMainThread$1 r2 = new com.discord.emoji_picker.EmojiPickerCache$refreshDatabaseEmojis$$inlined$postOrRunOnMainThread$1
            r2.<init>()
            r1.post(r2)
        L83:
            kotlin.Unit r5 = kotlin.Unit.f33298a
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.emoji_picker.EmojiPickerCache.refreshDatabaseEmojis(kotlin.coroutines.Continuation):java.lang.Object");
    }

    public static /* synthetic */ void refreshEmojis$default(EmojiPickerCache emojiPickerCache, EmojiPickerItemData.CoreData coreData, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            coreData = null;
        }
        emojiPickerCache.refreshEmojis(coreData);
    }

    public final void invalidate() {
        Job job = this.emojiFetchJob;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
    }

    public final void refreshEmojis(EmojiPickerItemData.CoreData coreData) {
        if (coreData == null) {
            coreData = this.emojiCoreData;
        }
        this.emojiCoreData = coreData;
        if (coreData.getHasGuildData()) {
            this.emojiFetchEvents.b(Unit.f33298a);
        }
    }
}
