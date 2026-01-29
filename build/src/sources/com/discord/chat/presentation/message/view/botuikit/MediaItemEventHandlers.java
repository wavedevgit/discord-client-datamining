package com.discord.chat.presentation.message.view.botuikit;

import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0010\b\n\u0002\u0010\u0006\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u001f\b\u0086\b\u0018\u00002\u00020\u0001B\u0087\u0001\u0012&\u0010\b\u001a\"\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u0005\u0012\u0006\u0012\u0004\u0018\u00010\u0006\u0012\u0004\u0012\u00020\u00070\u0002\u0012\u001c\u0010\n\u001a\u0018\u0012\u0004\u0012\u00020\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0005\u0012\u0004\u0012\u00020\u0007\u0018\u00010\t\u0012\f\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u00070\u000b\u0012\u0016\u0010\u000f\u001a\u0012\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u00070\rj\u0002`\u000e\u0012\u0012\u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00070\r¢\u0006\u0004\b\u0012\u0010\u0013J0\u0010\u0014\u001a\"\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u0005\u0012\u0006\u0012\u0004\u0018\u00010\u0006\u0012\u0004\u0012\u00020\u00070\u0002HÆ\u0003¢\u0006\u0004\b\u0014\u0010\u0015J&\u0010\u0016\u001a\u0018\u0012\u0004\u0012\u00020\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0005\u0012\u0004\u0012\u00020\u0007\u0018\u00010\tHÆ\u0003¢\u0006\u0004\b\u0016\u0010\u0017J\u0016\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00070\u000bHÆ\u0003¢\u0006\u0004\b\u0018\u0010\u0019J \u0010\u001a\u001a\u0012\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u00070\rj\u0002`\u000eHÆ\u0003¢\u0006\u0004\b\u001a\u0010\u001bJ\u001c\u0010\u001c\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00070\rHÆ\u0003¢\u0006\u0004\b\u001c\u0010\u001bJ\u009a\u0001\u0010\u001d\u001a\u00020\u00002(\b\u0002\u0010\b\u001a\"\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u0005\u0012\u0006\u0012\u0004\u0018\u00010\u0006\u0012\u0004\u0012\u00020\u00070\u00022\u001e\b\u0002\u0010\n\u001a\u0018\u0012\u0004\u0012\u00020\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0005\u0012\u0004\u0012\u00020\u0007\u0018\u00010\t2\u000e\b\u0002\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u00070\u000b2\u0018\b\u0002\u0010\u000f\u001a\u0012\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u00070\rj\u0002`\u000e2\u0014\b\u0002\u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00070\rHÆ\u0001¢\u0006\u0004\b\u001d\u0010\u001eJ\u0010\u0010\u001f\u001a\u00020\u0004HÖ\u0001¢\u0006\u0004\b\u001f\u0010 J\u0010\u0010!\u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b!\u0010\"J\u001a\u0010$\u001a\u00020\u00102\b\u0010#\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b$\u0010%R7\u0010\b\u001a\"\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u0005\u0012\u0006\u0012\u0004\u0018\u00010\u0006\u0012\u0004\u0012\u00020\u00070\u00028\u0006¢\u0006\f\n\u0004\b\b\u0010&\u001a\u0004\b'\u0010\u0015R-\u0010\n\u001a\u0018\u0012\u0004\u0012\u00020\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0005\u0012\u0004\u0012\u00020\u0007\u0018\u00010\t8\u0006¢\u0006\f\n\u0004\b\n\u0010(\u001a\u0004\b)\u0010\u0017R\u001d\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u00070\u000b8\u0006¢\u0006\f\n\u0004\b\f\u0010*\u001a\u0004\b+\u0010\u0019R'\u0010\u000f\u001a\u0012\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u00070\rj\u0002`\u000e8\u0006¢\u0006\f\n\u0004\b\u000f\u0010,\u001a\u0004\b-\u0010\u001bR#\u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00070\r8\u0006¢\u0006\f\n\u0004\b\u0011\u0010,\u001a\u0004\b.\u0010\u001b¨\u0006/"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/MediaItemEventHandlers;", "", "Lkotlin/Function4;", "Landroid/view/View;", "", "", "", "", "onMediaItemClicked", "Lkotlin/Function2;", "onMediaItemLongClicked", "Lkotlin/Function0;", "onMediaItemSpoilerClicked", "Lkotlin/Function1;", "Lcom/discord/chat/presentation/events/MessageTapShowAltText;", "onMediaItemAltTextButtonClicked", "", "onMediaItemObscureToggle", "<init>", "(Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;)V", "component1", "()Lkotlin/jvm/functions/Function4;", "component2", "()Lkotlin/jvm/functions/Function2;", "component3", "()Lkotlin/jvm/functions/Function0;", "component4", "()Lkotlin/jvm/functions/Function1;", "component5", "copy", "(Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;)Lcom/discord/chat/presentation/message/view/botuikit/MediaItemEventHandlers;", "toString", "()Ljava/lang/String;", "hashCode", "()I", "other", "equals", "(Ljava/lang/Object;)Z", "Lkotlin/jvm/functions/Function4;", "getOnMediaItemClicked", "Lkotlin/jvm/functions/Function2;", "getOnMediaItemLongClicked", "Lkotlin/jvm/functions/Function0;", "getOnMediaItemSpoilerClicked", "Lkotlin/jvm/functions/Function1;", "getOnMediaItemAltTextButtonClicked", "getOnMediaItemObscureToggle", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MediaItemEventHandlers {
    @NotNull
    private final Function1<String, Unit> onMediaItemAltTextButtonClicked;
    @NotNull
    private final Function4 onMediaItemClicked;
    private final Function2<String, Integer, Unit> onMediaItemLongClicked;
    @NotNull
    private final Function1<Boolean, Unit> onMediaItemObscureToggle;
    @NotNull
    private final Function0<Unit> onMediaItemSpoilerClicked;

    /* JADX WARN: Multi-variable type inference failed */
    public MediaItemEventHandlers(@NotNull Function4 onMediaItemClicked, Function2<? super String, ? super Integer, Unit> function2, @NotNull Function0<Unit> onMediaItemSpoilerClicked, @NotNull Function1<? super String, Unit> onMediaItemAltTextButtonClicked, @NotNull Function1<? super Boolean, Unit> onMediaItemObscureToggle) {
        Intrinsics.checkNotNullParameter(onMediaItemClicked, "onMediaItemClicked");
        Intrinsics.checkNotNullParameter(onMediaItemSpoilerClicked, "onMediaItemSpoilerClicked");
        Intrinsics.checkNotNullParameter(onMediaItemAltTextButtonClicked, "onMediaItemAltTextButtonClicked");
        Intrinsics.checkNotNullParameter(onMediaItemObscureToggle, "onMediaItemObscureToggle");
        this.onMediaItemClicked = onMediaItemClicked;
        this.onMediaItemLongClicked = function2;
        this.onMediaItemSpoilerClicked = onMediaItemSpoilerClicked;
        this.onMediaItemAltTextButtonClicked = onMediaItemAltTextButtonClicked;
        this.onMediaItemObscureToggle = onMediaItemObscureToggle;
    }

    public static /* synthetic */ MediaItemEventHandlers copy$default(MediaItemEventHandlers mediaItemEventHandlers, Function4 function4, Function2 function2, Function0 function0, Function1 function1, Function1 function12, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            function4 = mediaItemEventHandlers.onMediaItemClicked;
        }
        Function2<String, Integer, Unit> function22 = function2;
        if ((i10 & 2) != 0) {
            function22 = mediaItemEventHandlers.onMediaItemLongClicked;
        }
        Function0<Unit> function02 = function0;
        if ((i10 & 4) != 0) {
            function02 = mediaItemEventHandlers.onMediaItemSpoilerClicked;
        }
        Function1<String, Unit> function13 = function1;
        if ((i10 & 8) != 0) {
            function13 = mediaItemEventHandlers.onMediaItemAltTextButtonClicked;
        }
        Function1<Boolean, Unit> function14 = function12;
        if ((i10 & 16) != 0) {
            function14 = mediaItemEventHandlers.onMediaItemObscureToggle;
        }
        Function1 function15 = function14;
        Function0 function03 = function02;
        return mediaItemEventHandlers.copy(function4, function22, function03, function13, function15);
    }

    @NotNull
    public final Function4 component1() {
        return this.onMediaItemClicked;
    }

    public final Function2<String, Integer, Unit> component2() {
        return this.onMediaItemLongClicked;
    }

    @NotNull
    public final Function0<Unit> component3() {
        return this.onMediaItemSpoilerClicked;
    }

    @NotNull
    public final Function1<String, Unit> component4() {
        return this.onMediaItemAltTextButtonClicked;
    }

    @NotNull
    public final Function1<Boolean, Unit> component5() {
        return this.onMediaItemObscureToggle;
    }

    @NotNull
    public final MediaItemEventHandlers copy(@NotNull Function4 onMediaItemClicked, Function2<? super String, ? super Integer, Unit> function2, @NotNull Function0<Unit> onMediaItemSpoilerClicked, @NotNull Function1<? super String, Unit> onMediaItemAltTextButtonClicked, @NotNull Function1<? super Boolean, Unit> onMediaItemObscureToggle) {
        Intrinsics.checkNotNullParameter(onMediaItemClicked, "onMediaItemClicked");
        Intrinsics.checkNotNullParameter(onMediaItemSpoilerClicked, "onMediaItemSpoilerClicked");
        Intrinsics.checkNotNullParameter(onMediaItemAltTextButtonClicked, "onMediaItemAltTextButtonClicked");
        Intrinsics.checkNotNullParameter(onMediaItemObscureToggle, "onMediaItemObscureToggle");
        return new MediaItemEventHandlers(onMediaItemClicked, function2, onMediaItemSpoilerClicked, onMediaItemAltTextButtonClicked, onMediaItemObscureToggle);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MediaItemEventHandlers) {
            MediaItemEventHandlers mediaItemEventHandlers = (MediaItemEventHandlers) obj;
            return Intrinsics.areEqual(this.onMediaItemClicked, mediaItemEventHandlers.onMediaItemClicked) && Intrinsics.areEqual(this.onMediaItemLongClicked, mediaItemEventHandlers.onMediaItemLongClicked) && Intrinsics.areEqual(this.onMediaItemSpoilerClicked, mediaItemEventHandlers.onMediaItemSpoilerClicked) && Intrinsics.areEqual(this.onMediaItemAltTextButtonClicked, mediaItemEventHandlers.onMediaItemAltTextButtonClicked) && Intrinsics.areEqual(this.onMediaItemObscureToggle, mediaItemEventHandlers.onMediaItemObscureToggle);
        }
        return false;
    }

    @NotNull
    public final Function1<String, Unit> getOnMediaItemAltTextButtonClicked() {
        return this.onMediaItemAltTextButtonClicked;
    }

    @NotNull
    public final Function4 getOnMediaItemClicked() {
        return this.onMediaItemClicked;
    }

    public final Function2<String, Integer, Unit> getOnMediaItemLongClicked() {
        return this.onMediaItemLongClicked;
    }

    @NotNull
    public final Function1<Boolean, Unit> getOnMediaItemObscureToggle() {
        return this.onMediaItemObscureToggle;
    }

    @NotNull
    public final Function0<Unit> getOnMediaItemSpoilerClicked() {
        return this.onMediaItemSpoilerClicked;
    }

    public int hashCode() {
        int hashCode = this.onMediaItemClicked.hashCode() * 31;
        Function2<String, Integer, Unit> function2 = this.onMediaItemLongClicked;
        return ((((((hashCode + (function2 == null ? 0 : function2.hashCode())) * 31) + this.onMediaItemSpoilerClicked.hashCode()) * 31) + this.onMediaItemAltTextButtonClicked.hashCode()) * 31) + this.onMediaItemObscureToggle.hashCode();
    }

    @NotNull
    public String toString() {
        Function4 function4 = this.onMediaItemClicked;
        Function2<String, Integer, Unit> function2 = this.onMediaItemLongClicked;
        Function0<Unit> function0 = this.onMediaItemSpoilerClicked;
        Function1<String, Unit> function1 = this.onMediaItemAltTextButtonClicked;
        Function1<Boolean, Unit> function12 = this.onMediaItemObscureToggle;
        return "MediaItemEventHandlers(onMediaItemClicked=" + function4 + ", onMediaItemLongClicked=" + function2 + ", onMediaItemSpoilerClicked=" + function0 + ", onMediaItemAltTextButtonClicked=" + function1 + ", onMediaItemObscureToggle=" + function12 + ")";
    }
}
