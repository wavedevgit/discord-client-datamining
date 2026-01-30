package app.rive;

import app.rive.core.CloseOnce;
import app.rive.core.CommandQueue;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
/*  JADX ERROR: JadxRuntimeException in pass: ClassModifier
    jadx.core.utils.exceptions.JadxRuntimeException: Not class type: H
    	at jadx.core.dex.info.ClassInfo.checkClassType(ClassInfo.java:53)
    	at jadx.core.dex.info.ClassInfo.fromType(ClassInfo.java:31)
    	at jadx.core.dex.visitors.ClassModifier.removeSyntheticFields(ClassModifier.java:83)
    	at jadx.core.dex.visitors.ClassModifier.visit(ClassModifier.java:61)
    	at jadx.core.dex.visitors.ClassModifier.visit(ClassModifier.java:55)
    */
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b7\u0018\u0000 \u0014*\u0004\b\u0000\u0010\u00012\u00020\u0002:\u0001\u0014B3\b\u0004\u0012\u0006\u0010\u0003\u001a\u00028\u0000\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u001a\u0010\u0006\u001a\u0016\u0012\u0004\u0012\u00028\u0000\u0012\f\b\u0001\u0012\b\u0012\u0004\u0012\u00028\u00000\u00000\u0007¢\u0006\u0002\u0010\bJ\t\u0010\u000e\u001a\u00020\u000fH\u0096\u0001J\u000e\u0010\u0010\u001a\u00020\u000f2\u0006\u0010\u0011\u001a\u00020\u0012J\u000e\u0010\u0013\u001a\u00020\u000f2\u0006\u0010\u0011\u001a\u00020\u0012R\u0014\u0010\u0004\u001a\u00020\u0005X\u0084\u0004¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0016\u0010\u0003\u001a\u00028\u0000X\u0084\u0004¢\u0006\n\n\u0002\u0010\r\u001a\u0004\b\u000b\u0010\fR\"\u0010\u0006\u001a\u0016\u0012\u0004\u0012\u00028\u0000\u0012\f\b\u0001\u0012\b\u0012\u0004\u0012\u00028\u00000\u00000\u0007X\u0082\u0004¢\u0006\u0002\n\u0000\u0082\u0001\u0003\u0015\u0016\u0017¨\u0006\u0018"}, d2 = {"Lapp/rive/Asset;", "H", "Ljava/lang/AutoCloseable;", "handle", "commandQueue", "Lapp/rive/core/CommandQueue;", "ops", "Lapp/rive/AssetOps;", "(Ljava/lang/Object;Lapp/rive/core/CommandQueue;Lapp/rive/AssetOps;)V", "getCommandQueue", "()Lapp/rive/core/CommandQueue;", "getHandle", "()Ljava/lang/Object;", "Ljava/lang/Object;", "close", "", "register", "key", "", "unregister", "Companion", "Lapp/rive/AudioAsset;", "Lapp/rive/FontAsset;", "Lapp/rive/ImageAsset;", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nAssets.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Assets.kt\napp/rive/Asset\n+ 2 RiveLog.kt\napp/rive/RiveLog\n*L\n1#1,443:1\n57#2:444\n57#2:445\n*S KotlinDebug\n*F\n+ 1 Assets.kt\napp/rive/Asset\n*L\n101#1:444\n112#1:445\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class Asset<H> implements AutoCloseable {
    private final /* synthetic */ CloseOnce $$delegate_0;
    @NotNull
    private final CommandQueue commandQueue;
    private final H handle;
    @NotNull
    private final AssetOps<H, ? extends Asset<H>> ops;
    @NotNull
    public static final Companion Companion = new Companion(null);
    public static final int $stable = 8;

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0012\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002JP\u0010\u0003\u001a\b\u0012\u0004\u0012\u0002H\u00050\u0004\"\u0004\b\u0001\u0010\u0006\"\u000e\b\u0002\u0010\u0005*\b\u0012\u0004\u0012\u0002H\u00060\u00072\u0012\u0010\b\u001a\u000e\u0012\u0004\u0012\u0002H\u0006\u0012\u0004\u0012\u0002H\u00050\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rH\u0080@¢\u0006\u0004\b\u000e\u0010\u000f¨\u0006\u0010"}, d2 = {"Lapp/rive/Asset$Companion;", "", "()V", "fromBytes", "Lapp/rive/Result;", "A", "H", "Lapp/rive/Asset;", "ops", "Lapp/rive/AssetOps;", "commandQueue", "Lapp/rive/core/CommandQueue;", "bytes", "", "fromBytes$kotlin_release", "(Lapp/rive/AssetOps;Lapp/rive/core/CommandQueue;[BLkotlin/coroutines/Continuation;)Ljava/lang/Object;", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nAssets.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Assets.kt\napp/rive/Asset$Companion\n+ 2 RiveLog.kt\napp/rive/RiveLog\n*L\n1#1,443:1\n57#2:444\n57#2:445\n70#2:446\n*S KotlinDebug\n*F\n+ 1 Assets.kt\napp/rive/Asset$Companion\n*L\n74#1:444\n80#1:445\n84#1:446\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
        /* JADX WARN: Removed duplicated region for block: B:20:0x003e  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final <H, A extends app.rive.Asset<H>> java.lang.Object fromBytes$kotlin_release(@org.jetbrains.annotations.NotNull final app.rive.AssetOps<H, A> r6, @org.jetbrains.annotations.NotNull app.rive.core.CommandQueue r7, @org.jetbrains.annotations.NotNull byte[] r8, @org.jetbrains.annotations.NotNull kotlin.coroutines.Continuation<? super app.rive.Result<? extends A>> r9) {
            /*
                r5 = this;
                boolean r0 = r9 instanceof app.rive.Asset$Companion$fromBytes$1
                if (r0 == 0) goto L13
                r0 = r9
                app.rive.Asset$Companion$fromBytes$1 r0 = (app.rive.Asset$Companion$fromBytes$1) r0
                int r1 = r0.label
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.label = r1
                goto L18
            L13:
                app.rive.Asset$Companion$fromBytes$1 r0 = new app.rive.Asset$Companion$fromBytes$1
                r0.<init>(r5, r9)
            L18:
                java.lang.Object r9 = r0.result
                java.lang.Object r1 = or.b.f()
                int r2 = r0.label
                r3 = 1
                if (r2 == 0) goto L3e
                if (r2 != r3) goto L36
                java.lang.Object r6 = r0.L$1
                r7 = r6
                app.rive.core.CommandQueue r7 = (app.rive.core.CommandQueue) r7
                java.lang.Object r6 = r0.L$0
                app.rive.AssetOps r6 = (app.rive.AssetOps) r6
                kotlin.c.b(r9)     // Catch: java.lang.Exception -> L32 java.util.concurrent.CancellationException -> L34
                goto L67
            L32:
                r8 = move-exception
                goto L71
            L34:
                r8 = move-exception
                goto L92
            L36:
                java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
                r6.<init>(r7)
                throw r6
            L3e:
                kotlin.c.b(r9)
                java.lang.String r9 = r6.getTag()
                app.rive.Asset$Companion$fromBytes$2 r2 = new app.rive.Asset$Companion$fromBytes$2
                r2.<init>()
                app.rive.RiveLog r4 = app.rive.RiveLog.INSTANCE
                app.rive.RiveLog$Logger r4 = r4.getLogger()
                r4.d(r9, r2)
                java.lang.String r9 = r6.getTag()
                r7.acquire(r9)
                r0.L$0 = r6     // Catch: java.lang.Exception -> L32 java.util.concurrent.CancellationException -> L34
                r0.L$1 = r7     // Catch: java.lang.Exception -> L32 java.util.concurrent.CancellationException -> L34
                r0.label = r3     // Catch: java.lang.Exception -> L32 java.util.concurrent.CancellationException -> L34
                java.lang.Object r9 = r6.decode(r7, r8, r0)     // Catch: java.lang.Exception -> L32 java.util.concurrent.CancellationException -> L34
                if (r9 != r1) goto L67
                return r1
            L67:
                app.rive.Result$Success r8 = new app.rive.Result$Success     // Catch: java.lang.Exception -> L32 java.util.concurrent.CancellationException -> L34
                app.rive.Asset r9 = r6.construct(r9, r7)     // Catch: java.lang.Exception -> L32 java.util.concurrent.CancellationException -> L34
                r8.<init>(r9)     // Catch: java.lang.Exception -> L32 java.util.concurrent.CancellationException -> L34
                return r8
            L71:
                java.lang.String r9 = r6.getTag()
                app.rive.Asset$Companion$fromBytes$4 r0 = new app.rive.Asset$Companion$fromBytes$4
                r0.<init>()
                app.rive.RiveLog r1 = app.rive.RiveLog.INSTANCE
                app.rive.RiveLog$Logger r1 = r1.getLogger()
                r1.e(r9, r8, r0)
                java.lang.String r6 = r6.getTag()
                java.lang.String r9 = "Decode error"
                r7.release(r6, r9)
                app.rive.Result$Error r6 = new app.rive.Result$Error
                r6.<init>(r8)
                return r6
            L92:
                java.lang.String r9 = r6.getTag()
                app.rive.Asset$Companion$fromBytes$3 r0 = new app.rive.Asset$Companion$fromBytes$3
                r0.<init>()
                app.rive.RiveLog r1 = app.rive.RiveLog.INSTANCE
                app.rive.RiveLog$Logger r1 = r1.getLogger()
                r1.d(r9, r0)
                java.lang.String r6 = r6.getTag()
                java.lang.String r9 = "Cancellation"
                r7.release(r6, r9)
                throw r8
            */
            throw new UnsupportedOperationException("Method not decompiled: app.rive.Asset.Companion.fromBytes$kotlin_release(app.rive.AssetOps, app.rive.core.CommandQueue, byte[], kotlin.coroutines.Continuation):java.lang.Object");
        }

        private Companion() {
        }
    }

    static {
    }

    public /* synthetic */ Asset(Object obj, CommandQueue commandQueue, AssetOps assetOps, DefaultConstructorMarker defaultConstructorMarker) {
        this(obj, commandQueue, assetOps);
    }

    @Override // java.lang.AutoCloseable
    public void close() {
        this.$$delegate_0.close();
    }

    @NotNull
    protected final CommandQueue getCommandQueue() {
        return this.commandQueue;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final H getHandle() {
        return this.handle;
    }

    public final void register(@NotNull final String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        RiveLog.INSTANCE.getLogger().d(this.ops.getTag(), new Function0<String>(this) { // from class: app.rive.Asset$register$1
            final /* synthetic */ Asset<H> this$0;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(0);
                this.this$0 = this;
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            public final String invoke() {
                AssetOps assetOps;
                assetOps = ((Asset) this.this$0).ops;
                String label = assetOps.getLabel();
                String str = key;
                Object handle = this.this$0.getHandle();
                return "Registering " + label + " with key: " + str + " and handle: " + handle;
            }
        });
        this.ops.register(this.commandQueue, key, this.handle);
    }

    public final void unregister(@NotNull final String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        RiveLog.INSTANCE.getLogger().d(this.ops.getTag(), new Function0<String>(this) { // from class: app.rive.Asset$unregister$1
            final /* synthetic */ Asset<H> this$0;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(0);
                this.this$0 = this;
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            public final String invoke() {
                AssetOps assetOps;
                assetOps = ((Asset) this.this$0).ops;
                String label = assetOps.getLabel();
                String str = key;
                return "Unregistering " + label + " with key: " + str;
            }
        });
        this.ops.unregister(this.commandQueue, key);
    }

    private Asset(final H h10, final CommandQueue commandQueue, final AssetOps<H, ? extends Asset<H>> assetOps) {
        this.handle = h10;
        this.commandQueue = commandQueue;
        this.ops = assetOps;
        this.$$delegate_0 = new CloseOnce(new Function0<Unit>() { // from class: app.rive.Asset.1
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m17invoke();
                return Unit.f33298a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m17invoke() {
                String tag = assetOps.getTag();
                final AssetOps<H, ? extends Asset<H>> assetOps2 = assetOps;
                final H h11 = h10;
                RiveLog.INSTANCE.getLogger().d(tag, new Function0<String>() { // from class: app.rive.Asset.1.1
                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    {
                        super(0);
                    }

                    @Override // kotlin.jvm.functions.Function0
                    public /* bridge */ /* synthetic */ Object invoke() {
                        return invoke();
                    }

                    @Override // kotlin.jvm.functions.Function0
                    @NotNull
                    public final String invoke() {
                        String label = assetOps2.getLabel();
                        H h12 = h11;
                        return "Deleting " + label + " with handle: " + h12;
                    }
                });
                assetOps.delete(commandQueue, h10);
                commandQueue.release(assetOps.getTag(), "Asset closed");
            }
        });
    }
}
