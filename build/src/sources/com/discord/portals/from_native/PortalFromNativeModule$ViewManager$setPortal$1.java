package com.discord.portals.from_native;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.discord.portals.from_native.PortalFromNativeModule;
import com.discord.reactevents.ReactEvents;
import js.g;
import js.i0;
import js.m0;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.portals.from_native.PortalFromNativeModule$ViewManager$setPortal$1", f = "PortalFromNativeModule.kt", l = {ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class PortalFromNativeModule$ViewManager$setPortal$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ double $portal;
    final /* synthetic */ PortalHolderViewGroup $portalView;
    int label;
    final /* synthetic */ PortalFromNativeModule.ViewManager this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @e(c = "com.discord.portals.from_native.PortalFromNativeModule$ViewManager$setPortal$1$1", f = "PortalFromNativeModule.kt", l = {ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED}, m = "invokeSuspend")
    /* renamed from: com.discord.portals.from_native.PortalFromNativeModule$ViewManager$setPortal$1$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AnonymousClass1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
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
            Object f10 = rr.b.f();
            int i10 = this.label;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.label = 1;
                if (i0.a(50L, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
            return ((AnonymousClass1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public PortalFromNativeModule$ViewManager$setPortal$1(double d10, PortalHolderViewGroup portalHolderViewGroup, PortalFromNativeModule.ViewManager viewManager, Continuation<? super PortalFromNativeModule$ViewManager$setPortal$1> continuation) {
        super(2, continuation);
        this.$portal = d10;
        this.$portalView = portalHolderViewGroup;
        this.this$0 = viewManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$0(PortalFromNativeModule.ViewManager viewManager, PortalHolderViewGroup portalHolderViewGroup, double d10) {
        ReactEvents reactEvents;
        reactEvents = viewManager.reactEvents;
        reactEvents.emitEvent(portalHolderViewGroup, new PortalFromNativeModule.OnPortalViewLoadedEvent(d10));
        return Unit.f32464a;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new PortalFromNativeModule$ViewManager$setPortal$1(this.$portal, this.$portalView, this.this$0, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object f10 = rr.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                kotlin.c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            CoroutineDispatcher a10 = m0.a();
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(null);
            this.label = 1;
            if (g.g(a10, anonymousClass1, this) == f10) {
                return f10;
            }
        }
        PortalFromNativeContextManager portalFromNativeContextManager = PortalFromNativeContextManager.INSTANCE;
        final double d10 = this.$portal;
        final PortalHolderViewGroup portalHolderViewGroup = this.$portalView;
        final PortalFromNativeModule.ViewManager viewManager = this.this$0;
        portalFromNativeContextManager.registerView(d10, portalHolderViewGroup, new Function0() { // from class: com.discord.portals.from_native.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit invokeSuspend$lambda$0;
                invokeSuspend$lambda$0 = PortalFromNativeModule$ViewManager$setPortal$1.invokeSuspend$lambda$0(PortalFromNativeModule.ViewManager.this, portalHolderViewGroup, d10);
                return invokeSuspend$lambda$0;
            }
        });
        return Unit.f32464a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((PortalFromNativeModule$ViewManager$setPortal$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
    }
}
